const index = require("./index");
it ("should show Buzz when 25 is incerted",()=>{
    expect (index(25)).toBe("Buzz")
});
it ("should show Fizz when 15 is incerted",()=>{
    expect (index(15)).toBe("FizzBuzz")
});
it ("should show Buzz when 12 is incerted",()=>{
    expect (index(12)).toBe("Fizz")
});
it ("should show 13 when 13 is incerted",()=>{
    expect (index(13)).toBe(13)
});