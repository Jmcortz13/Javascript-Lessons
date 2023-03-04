async function add(first, second) {
    return first + second;
}

async function subtract(first, second) {
    return first - second;
}

async function multiply(first, second) {
    return first * second;
}

async function divide(first, second) {
    return first / second;
}


add(2, 3).then(
    res => {
        console.log(res);
    }
);

subtract(10,7).then(
    res => {
        console.log(res);
    
});

multiply(5, 5).then(
    res => {
        console.log(res)
    }
);

divide(5, 5).then(
    res => {
        console.log(res)
    }
)