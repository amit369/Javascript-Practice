
let str="madam";

function checkPalindrome(str)
{
    for(i=str.length-1,j=0;i>j ;i--,j++)
    {
        if(str[i] != str[j])
        {
          return false;
        }
    }
    return true;
}

let palindrome_check = checkPalindrome(str);
if(palindrome_check)
{
    console.log('String is palindrome ');
}
else {
    console.log('String is not palindrome ');
}