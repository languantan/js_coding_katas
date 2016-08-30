export default class {
  constructor() {
    this.words = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
      'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'nineteen'];
    this.words[20] = ['Twenty'];
    this.words[30] = ['Thirty'];
    this.words[40] = ['Forty'];
    this.words[50] = ['Fifty'];
    this.words[60] = ['Sixty'];
    this.words[70] = ['Seventy'];
    this.words[80] = ['Eighty'];
    this.words[90] = ['Ninety'];
  }

  convertToString(num) {
    let finalString = '';

    const tens = num % 100;
    if (tens < 20) {
      finalString += this.words[tens];
    } else {
      finalString += this.getTenString(tens) + this.words[tens % 10];
    }

    const hundreds = Math.floor(num / 100);
    if (hundreds === 0) return finalString;
    finalString = this.getHundredString(hundreds) + finalString;

    return finalString;
  }

  getTenString(num) {
    const ones = num % 10;
    const tens = (num % 100) - ones;

    return this.words[tens];
  }

  getHundredString(num) {
    if (num % 10 === 0) {
      return '';
    }
    return `${this.words[num % 10]}Hundred`;
  }
}
