const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

    it('should return buzz for numbers divisible by 5', function() {       
        fizzBuzzer(10).should.equal('buzz');
    });

    it('should return buzz for numbers divisible by 3', function() {
        fizzBuzzer(6).should.equal('fizz');
    });

    it('should return buzz for numbers divisible by 15', function() {       
        fizzBuzzer(45).should.equal('fizz-buzz');
    });

    it('should raise error if arg not a number', function() {
        // range of bad inputs where not both are numbers
        const badInputs = [
          ['a'],
          ['1'],
          [false]
        ];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function(input) {
          (function() {
              fizzBuzzer(input[0])
          }).should.throw(Error);
        });
    });

    

});