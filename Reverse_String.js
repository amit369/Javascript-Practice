
let str="hello";
let reverseString = reverse(str);

console.log('reverse string ' + reverseString);

function reverse(str)
{
       return str.split('').reverse().join('');
}