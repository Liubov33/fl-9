function findType(value) {
    return typeof value;
}

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

function map(arr, callback) {
    let newArr = [];
    forEach(arr, el => newArr.push(callback(el)));
    return newArr;
}

function filter(arr, callback) {
    let filtered = [];
    forEach(arr, el => {
        if (callback(el)) {
            filtered.push(el);
        }
    });
    return filtered;
}

function getAdultAppleLovers(data) {
    let newArr = [];
    map(filter(data, el =>
        data.age > 18 && data.favoriteFruit === 'apple'), el => el.name);
}

function keys(obj) {
    let keys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(obj(key));
        }
    }
    return keys;
}

function showFormattedDate(date) {
    date = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `It is ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`;
}