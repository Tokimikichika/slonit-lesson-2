const mySlice = (arr, start = 0, end = arr.length) => {
    const newArr = []
    if (start < 0) {
        start = arr.length + start;
    }
    if (end < 0) {
        end = arr.length + end;
    }
    start = Math.max(0, Math.min(start, arr.length));
    end = Math.max(0, Math.min(end, arr.length));
    
    for (let i = start; i < end; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
};

const myIndexOf = (arr, item, from = 0) => {
    if (from < 0) {
        from = arr.length + from;
    }
    from = Math.max(0, Math.min(from, arr.length));
    
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
};

const myIncludes = (arr, item, from = 0) => {
    if (from < 0) {
        from = arr.length + from;
    }
    from = Math.max(0, Math.min(from, arr.length));
    
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}