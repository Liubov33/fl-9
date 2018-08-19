let amountInput = parseFloat(prompt('Amount of money:', ''));
let amount = amountInput.toFixed(2);

let discountInput = parseFloat(prompt('Discount:', ''));
let discount = discountInput.toFixed(2);

let priceWithDiscount = (amount-amount * discount/100).toFixed(2);
let saved = amount - priceWithDiscount;

if (amountInput < 0) {
    console.log('Invalid data');
} else {
    console.log(`Price without discount: ${amount}\nDiscount: ${discount}%
Price with discount: ${priceWithDiscount}\nSaved: ${saved}`);
}
