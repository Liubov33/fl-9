let a = parseFloat(prompt('Enter the length of the triangle side a', ''));
let b = parseFloat(prompt('Enter the length of the triangle side b', ''));
let alpha = parseFloat(prompt('Enter the angle between side a and side b', ''));

let square = a * b * Math.sign(alpha * Math.PI / 180);
let p = (a + b + c);

if (a < 0 || b < 0) {
    console.log('Invalid data');
} else {
    console.log(`c length: \nTriangle square: ${square}\nTriangle perimetr: ${p}`);
}
