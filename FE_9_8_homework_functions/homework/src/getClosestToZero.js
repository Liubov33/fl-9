function getClosestToZero() {
    let closest = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (Math.abs(arguments[i]) < closest) {
            closest = Math.abs(arguments[i]);
        }
    }
    return closest;
}