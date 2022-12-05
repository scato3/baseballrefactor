const MissionUtils = require("@woowacourse/mission-utils");
const { inputError, reStartError } = require('./Error')
const isStrikeBall = require('./isStrikeBall')
const generateNumbers = require('./generateNumbers')

const Input = {
    InputNum(computerInput) {
        console.log(computerInput)
        MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
            if(inputError(userInput));
            MissionUtils.Console.print(isStrikeBall.strikeBallResult(computerInput, userInput))
            if(userInput !== computerInput) return this.InputNum(computerInput)
            MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
            MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (userInput) => {
                reStartError(userInput)
                if(userInput === '1') return this.InputNum(generateNumbers.generate())
                MissionUtils.Console.close()
            })
        })
    }
}

module.exports = Input