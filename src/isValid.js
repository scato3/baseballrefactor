const isValid = (userInput) => {
    const inputArr = `${userInput}`.split('')
    if(new Set(inputArr).size !== 3) return false;
    const checkNumber = inputArr.every(v => !isNaN(v) && v !== '0')
    return checkNumber ? inputArr : false;
}

module.exports = { isValid }