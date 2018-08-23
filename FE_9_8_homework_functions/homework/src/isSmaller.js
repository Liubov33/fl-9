let isBigger = (arg1, arg2) => {
    return arg1 > arg2
}

let isSmaller = (arg1, arg2) => {
    return !isBigger(arg1, arg2)
}
