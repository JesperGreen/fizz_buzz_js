describe("FizzBuzz", function() {
  var subject;

  beforeEach(function() {
    subject = new FizzBuzz();
  });

  it("returns 1 if number = 1", function() {
    expect(subject.calculate(1)).toEqual(1);
  });

  it("returns 'fizzbuzz' if number = 15", function() {
    expect(subject.calculate(15)).toEqual('fizzbuzz');
  });

  it("returns 'buzz' if number = 5", function() {
    expect(subject.calculate(5)).toEqual('buzz');
  });

  it("returns fizz if number = 3", function() {
    expect(subject.calculate(3)).toEqual('fizz');
  });
});
