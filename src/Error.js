const MissionUtils = require("@woowacourse/mission-utils");

const { isValid } = require('./isValid')

function inputError(userInput) {
    if(!isValid(userInput)) throw '잘못된 입력입니다.'
}

function reStartError(userInput) {
    if(!(userInput === '1' || userInput === '2')) throw '잘못된 입력입니다'
}

module.exports = { inputError, reStartError } 