// ------task 1 palindrome----\\
var str = prompt("enter your palindrome");
var leng = str.length;
var caseSensitive = confirm ("cass is sensitive")
if (caseSensitive == false){
str.toLowerCase();
for (i = 0 ; i<leng ; i++)
if (str[i] == str[leng - 1]){
    console.log("case2")
    document.write(`<h1>your ${str} is palindrome</h1>`)}

}else if  (caseSensitive == true)
{document.write(`<h1>your ${str} is not palindrome</h1>`)}
console.log (str[i]);
console.log("hi" + str[leng - 1])








