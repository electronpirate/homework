class UpperCaser{

  constructor (words) {
    this.words = words;
  }

  toUpperCase() {
    return this.words.map(function(word){
      return word.toString().toUpperCase();
    });

  }

}

module.exports = UpperCaser;
