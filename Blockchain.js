const hash = require('object-hash');

class Blockchain{
    
    constructor(){
        //array que guarda a sequencia de blocos
        this.chain = [];
        //array que guarda as transaçoes
        this.current_transactions = [];
    }

    //funçao que gera novo bloco
    new_block(prevHash){
        const block = {
            index:this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.current_transactions,
            prevHash: prevHash
        };
        this.hash = hash(block);
        this.chain.push(block);
        this.current_transactions = [];
        return block;
    }
    //gera nova transaçao
    new_transaction(sender, recipient, amount){        
        this.current_transactions.push({sender, recipient, amount});
    }

    //retorna o ultimo bloco da chain
    lastBlock(){
        return this.chain.slice(-1)[0];
    }

    //retorna verdadeiro caso a chain esteja vazia
    isEmpty(){
        return this.chain.length == 0;
    }

}
module.exports = Blockchain;