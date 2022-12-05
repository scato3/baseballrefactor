const MissionUtils = require("@woowacourse/mission-utils");

const generateNumbers = {
    generate() {
        const computer = []
        while(computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if(!computer.includes(number)) computer.push(number)
        }
        return computer.join('').toString()
    }
}

module.exports = generateNumbers