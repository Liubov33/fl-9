let amount = parseFloat(prompt('Amount of money:', ''));
let discount = parseFloat(prompt('Discount:', ''));

let priceWithDiscount = amount-amount * discount/100;
let saved = amount - priceWithDiscount;

if (amount < 0 || discount < 0) {
    console.log('Invalid data');
} else {
    console.log(`Price without discount: ${amount.toFixed(2)}\nDiscount: ${discount.toFixed(2)}%
Price with discount: ${priceWithDiscount.toFixed(2)}\nSaved: ${saved}`);
}
