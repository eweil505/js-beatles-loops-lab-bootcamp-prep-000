describe('Beatles Loops', function() {
  it("returns an array of strings containing what instruments each instrument plays", function() {
    const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

    expect(theBeatlesPlay(musicians, instruments)).toEqual(["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"]);
  });

  function theBeatlesPlay(musicians, instruments) {
    var result = [];

    for (var i = 0; i < instruments.length; i++) {
      result.push(`${musicians[i]} plays ${instruments[i]}`);
    }

    return result;
  }

  describe('johnLennonFacts', function(){
    it("returns an array of strings with exclamation points", function() {
      expect(johnLennonFacts([
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ])).toEqual(["He was the last Beatle to learn to drive!!!", "He was never a vegetarian!!!", "He was a choir boy and boy scout!!!", "He hated the sound of his own voice!!!"]);

      expect(johnLennonFacts([
        "foo",
        "bar",
      ])).toEqual(["foo!!!", "bar!!!"])
    });
  });

function johnLennonFacts(array) {
var result = [];
var i = 0;
  while (i < array.length) {
      result.push(array[i] + "!!!");
      i++;
  }
  return result;
}

  describe('iLoveTheBeatles', function() {
    it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
      expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
    });

    it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
      expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
    });
  });

});

function iLoveTheBeatles(n) {
  var result = [];
  do {
    result.push("I love the Beatles!");
    n--;
  } while (n <= 15 || n === 0);

  return result;
}
