let a = parseFloat(prompt('Enter the length of the triangle side a', ''));
let b = parseFloat(prompt('Enter the length of the triangle side b', ''));
let alpha = parseFloat(prompt('Enter the angle between side a and side b', ''));
const degree = 180;
let square = a * b * Math.sign(alpha);
let c = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(alpha * Math.PI / degree));
let p = a + b + c;

if (a < 0 || b < 0 || alpha > degree) {
    console.log('Invalid data');
} else {
    console.log(`c length: ${c.toFixed(2)} \nTriangle square: ${square.toFixed(2)}
Triangle perimetr: ${p.toFixed(2)}`);
}
