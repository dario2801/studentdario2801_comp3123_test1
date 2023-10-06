const mixedArray = ['PIZZA', 10, true, 25, false, "Wings", "Dario"]

async function loweCaseFunction() {
    const initialValue = [];
    mixedArray.reduce((accumulator, currentValue) => { if (typeof (currentValue) === 'string') { return initialValue.push(currentValue.toLowerCase()) } }, initialValue);
    return initialValue;

};

loweCaseFunction().then(response => {
    console.log(response);

});