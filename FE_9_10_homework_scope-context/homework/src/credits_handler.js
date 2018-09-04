const userCard = key => {
    let balance = 100,
        transactionLimit = 100,
        historyLogs = [];

    const tax = 0.5,
        hundredPercent = 100;

    return {
        getCardOptions: function() {
            return {
                key,
                balance,
                transactionLimit,
                historyLogs
            }
        },

        putCredits: function(credits) {
            balance += credits;
            historyLogs.push({
                operationType: 'Received credits',
                credits: credits,
                operationTime: new Date().toLocaleString()
            });
        },

        takeCredits: function(credits) {
            if (transactionLimit >= credits && balance >= credits) {
                balance -= credits;
                historyLogs.push({
                    operationType: 'Withdrawal of credits',
                    credits: credits,
                    operationTime: new Date().toLocaleString()
                });
            } else {
                console.log('You can\'t take credit');
            }
        },

        setTransactionLimit: function(credits) {
            transactionLimit = credits;
            historyLogs.push({
                operationType: 'Transaction limit change',
                credits: credits,
                operationTime: new Date().toLocaleString()
            });
        },

        transferCredits: function(credits, card) {
            const taxedCredits = credits * tax / hundredPercent + credits;
            if (transactionLimit >= credits && balance >= taxedCredits) {
                this.takeCredits(taxedCredits);
                card.putCredits(credits);
            } else if (transactionLimit < credits) {
                console.log('Transaction limit exceeded');
            } else if (balance < taxedCredits) {
                console.log('Balance exceeded')
            }
        }
    }
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.maxCardNumber = 3;
    }

    addCard() {
        if (this.cards.length < this.maxCardNumber) {
            this.cards.push(userCard(this.cards.length + 1));
        } else {
            console.log('Maximum number of cards exceeded')
        }
    }

    getCardByKey(key) {
        return this.cards[key - 1];
    }
}
