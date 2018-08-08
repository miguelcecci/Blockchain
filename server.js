const BlockChain = require('./Blockchain');

let hash = require('object-hash');

let blockchain = new BlockChain();

//Qualquer regra pode ser usada para validar, eu 
//escolhi que meu proof of work é validado
//por hashs cujo o primeiro e o ultimo caracter é igual
//a funçao validProof() faz justamente essa verificaçao
let validProof = (proof) => {
    let guessHash = hash(proof);
    console.log('Hashing: ', guessHash);
    return guessHash[0] === guessHash[guessHash.length-1];
};

//itera por varias tentativas até ter o proof of work validado
let proofOfWorfk = () => {
    let proof = 0;
    while(true){
        if(!validProof(proof)){
            proof++;
        }else{
            break;
        }
    }
    console.log(proof);
    
    return true;
}

//caso o proof of work seja validado sera criado uma nova transaçao e um novo bloco
if(proofOfWorfk()){
    blockchain.new_transaction('test', 'aaa', 200);
    let prevHash = blockchain.lastBlock() ? blockchain.lastBlock().hash : null;
    blockchain.new_block(prevHash);
}

console.log('Chain: ', blockchain.chain);
