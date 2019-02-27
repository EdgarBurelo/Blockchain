const BlockChain = require("./blockchain");

const bitcoin = new BlockChain();

console.log(bitcoin);

// const previousBlockHash = "ASDAWDF1234"
// const currentBlockData = [
//     {
//         amount: 10,
//         sender: "ASDBASD6",
//         recepient: "BGTERB34"
//     },
//     {
//         amount: 101,
//         sender: "g2q",
//         recepient: "f1"
//     },
//     {
//         amount: 130,
//         sender: "sadfsdf3",
//         recepient: "eERVERFV345345"
//     }
// ];

//console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,77138));

//console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData));

//const nonce = 100;
// console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce));

// bitcoin.createNewBlock(234,"UOBN123OKN", "AKSJDBNK234");

// bitcoin.createNewTransaction(100,'RICKJ123','BURELOKJB123');

// bitcoin.createNewBlock(123, "SDFGQ24RFQAC", "SADFQ2WERQ234");
// // bitcoin.createNewBlock(456, "ASEDF124", "BG435H135");
// bitcoin.createNewTransaction(100, 'RICKJ123', 'BURELOKJB123');
// bitcoin.createNewTransaction(234,'RICKJ123','BURELOKJB123');
// bitcoin.createNewTransaction(543134, 'RICKJ123', 'BURELOKJB123');

// bitcoin.createNewBlock(12341234, "SFG8345T", "KJBHK34J56B");

// console.log(bitcoin);

// console.log(bitcoin.chain[1]);
// console.log(bitcoin.chain[2]);