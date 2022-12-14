const isStrikeBall = {
    strikeBall(computerInput, userInput) {
        const computerInputArr = `${computerInput}`.split('')
        const userInputArr = `${userInput}`.split('')
        let strikeCount = 0
        let ballCount = 0
        
        computerInputArr.forEach((ele, idx) => {
            if(ele === userInputArr[idx]) strikeCount++
            else if(userInputArr.includes(ele)) ballCount++
        })
        return { strikeCount, ballCount }
    },
    strikeBallResult(computerInput, userInput) {
        const { strikeCount, ballCount } = this.strikeBall(computerInput, userInput)

        if(strikeCount === 0 && ballCount === 0) return '낫싱';
        if(ballCount === 0) return `${strikeCount}스트라이크`
        if(strikeCount === 0) return `${ballCount}볼`
        return `${ballCount}볼 ${strikeCount}스트라이크`
    }
}

module.exports = isStrikeBall