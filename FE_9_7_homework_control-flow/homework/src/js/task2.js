let message = confirm('Do you want to play a game?');

while (message) {
    var counter = 0;
    var attemptsLeft = 3;
    var nextAttempt = true;
    var range = 6;
    var price = 10;
    var totalPrice = 0;
    var tryAgain = 0;
    var randomNumber = Math.floor(Math.random() * range);
    const one = 1;

    while (counter < 3 && nextAttempt) {
        var userNumber = Number(prompt(`Enter a number from 0 to ${range - one}
Attempts left: ${attemptsLeft}\nTotal prize: ${totalPrice}$
Possible prize on current attempt: ${price}$`));

        if (userNumber === randomNumber) {
            totalPrice += price;
            counter = 0;
            attemptsLeft = 3;
            range = range * 2 - one;
            price *= 3;
            randomNumber = Math.floor(Math.random() * range);
            nextAttempt = confirm(`Congratulation! Your prize is: ${totalPrice}$\nDo you want to continue?`);
        } else {
            attemptsLeft--;
            counter++;
            price = Math.floor(price / (counter * 2));
        }
    }
    alert(`Thank you for a game. Your prize is: ${totalPrice}$`);
    message = confirm('Do you want to try again?');
    tryAgain++;
}
if (!tryAgain) {
    alert('You did not become a millionaire, but can');
}