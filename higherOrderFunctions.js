Array.prototype.userForEach = function (callbackfn) {
    const array = this;
    const length = array.length;

    for (let i = 0; i < length; i++) {
        callbackfn(array[i], i);
    }
}

Array.prototype.userMap = function (callbackfn) {
    const array = this, newArr = [];
    const length = array.length;

    for (let i = 0; i < length; i++) {
        newArr.push(callbackfn(array[i], i));
    }

    return newArr;
}


Array.prototype.userFilter = function (callbackfn) {
    const array = this, newArr = [];
    const length = array.length;

    for (let i = 0; i < length; i++) {
        callbackfn(array[i], i) && newArr.push(array[i]);
    }

    return newArr;
}


Array.prototype.userReduce = function (callbackfn, startVal = 0) {
    const array = this;
    const length = array.length;
    let total = startVal;

    for (let i = 0; i < length; i++) {
        total = callbackfn(total, array[i]);
    }

    return total;
}


Array.prototype.userFindIndex = function (callbackfn) {
    const array = this;
    const length = array.length;

    for (let i = 0; i < length; i++) {
        if (callbackfn(array[i])) return i;
    }

    return -1;
}


Array.prototype.userFind = function (callbackfn) {
    const array = this;
    const length = array.length;

    for (let i = 0; i < length; i++) {
        if (callbackfn(array[i])) return array[i];
    }

    return -1;
}


Array.prototype.userEvery = function (callbackfn) {
    const array = this;
    const length = array.length;

    for (let i = 0; i < length; i++) {
        if (!callbackfn(array[i])) return false;
    }

    return true;
}


Array.prototype.userSome = function (callbackfn) {
    const array = this;
    const length = array.length;

    for (let i = 0; i < length; i++) {
        if (callbackfn(array[i])) return true;
    }

    return false;
}


