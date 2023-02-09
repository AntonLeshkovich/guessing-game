class GuessingGame {
    
    constructor() {}
    
    setRange(min, max) {
         this.minNum = min;
         this.maxNum = max;
    }
    
    guess() {
        return this.guessNum = Math.round((this.maxNum + this.minNum) / 2);
    }
    
    lower() {
        return this.maxNum = this.guessNum;
    }
    
    greater() {
        return this.minNum = this.guessNum;
    }
}

module.exports = GuessingGame;
