export default class {
  constructor() {
    this.words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    this.words[20] = ['twenty'];
    this.words[30] = ['thirty'];
    this.words[40] = ['forty'];
    this.words[50] = ['fifty'];
    this.words[60] = ['sixty'];
    this.words[70] = ['seventy'];
    this.words[80] = ['eighty'];
    this.words[90] = ['ninety'];
  }

  convertToString(num) {
    let finalString = '';

    const tens = num % 100;
    if (tens < 10 && num > 100) {
      finalString += `and ${this.words[tens]}`;
    } else if (tens < 20) {
      finalString += this.words[tens];
    } else {
      finalString += this.handleTens(tens);
    }

    const hundreds = Math.floor(num / 100);
    if (hundreds === 0) return finalString;
    finalString = this.handleHundredsAndThousands(hundreds, finalString, 'hundred');

    const thousands = Math.floor(num / 1000);
    if (thousands === 0) return finalString;
    finalString = this.handleHundredsAndThousands(thousands, finalString, 'thousand');

    return finalString;
  }

  handleTens(num) {
    const ones = num % 10;
    const tens = (num % 100) - ones;

    return `${this.words[tens]} ${this.words[ones]}`;
  }

  handleHundredsAndThousands(num, finalString, unitString) {
    if (num % 10 === 0) {
      return `and ${finalString}`;
    }
    return `${this.words[num % 10]} ${unitString} ${finalString}`;
  }
}
