const express = require("express");
const app = express();
const uuid = require("uuid/v1");
const Blockchain = require("./blockchain");

const nodeAddress = uuid().split('-').join('');

const bitcoin = new Blockchain();

let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));

app.get("/blockchain", (req,res) => {
    res.send(bitcoin);
});

app.post("/transaction",(req,res) => {
    const blockIndex = bitcoin.createNewTransaction(req.body.amount,req.body.sender,req.body.recepient);
    res.json({ note: `Transaction will be added in block ${blockIndex}.`})
});

app.get("/mine", (req,res) => {
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock["hash"];
    const currentBlockData = {
        transaction: bitcoin.pendingTransactions,
        index: lastBlock["index"] + 1
    };

    const nonce = bitcoin.proofOfWork(previousBlockHash,currentBlockData);
    const blockHash = bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce);

    bitcoin.createNewTransaction(12.5, "00",nodeAddress);

    const newBlock = bitcoin.createNewBlock(nonce,previousBlockHash,blockHash);

    res.json({
        note: `New Block Mined Succesfully`,
        block: newBlock
    });
});


app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});