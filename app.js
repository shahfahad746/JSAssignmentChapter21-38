        // Chapters 21-25

/* Task 1

var firstName = prompt("Enter your first name: ");
var secondName = prompt("Enter your second name: ");

alert("Welcome "+firstName+" "+secondName);

*/

/* Task 2

var favPhone = prompt("Enter your favorite phone model: ");

document.write("My favorite phone is: "+favPhone+"<br>");
document.write("Length of string: "+favPhone.length);

*/

/* Task 3

var x = "Pakistani";

document.write("String: "+x+"<br>");
document.write("Index of 'n': "+x.indexOf("n"));

*/

/* Task 4

var x = "Hello World";

document.write("String: "+x+"<br>");
document.write("Last index of 'l': "+x.lastIndexOf("l"));

*/

/* Task 5

var x = "Pakistani";

document.write("String: "+x+"<br>");
document.write("Character at index 3: "+x.charAt(3));

*/

/* Task 6

var firstName = prompt("Enter your first name: ");
var secondName = prompt("Enter your second name: ");

alert("Welcome "+firstName.concat(" "+secondName));

*/

/* Task 7

var city = "Hyderabad";

document.write("City: "+city+"<br>");
document.write("After replacement: "+city.replace("Hyder","Islam"));

*/

/* Task 8

var message = "Ali and Sami are best friends. They play cricket and football together.";

document.write("Result: "+message.replace(/and/g,"&"));

*/

/* Task 9

var str = "472";
var num = +str;

document.write("Value: "+str+"<br>");
document.write("Type: "+typeof(str)+"<br>");
document.write("Value: "+num+"<br>");
document.write("Type: "+typeof(num)+"<br>");

*/

/* Task 10

var input = prompt("Enter Text: ");

document.write("User input: "+input+"<br>");
document.write("Upper Case: "+input.toLocaleUpperCase());

*/

/* Task 11

var input = prompt("Enter Text: ");
var x = input.slice(0,1);
var y = x.toUpperCase()+input.slice(1);
document.write("User input: "+input+"<br>");
document.write("Title Case: "+y);

*/

/* Task 12

var num = 35.36;
var x = num.toString().replace(".","");
document.write("Nubmer: "+num+"<br>");
document.write("Result: "+x);

*/

/* Task 13

var username = prompt("Enter your name: ");

var len = username.length;

for(var i=0; i<len; i++)
{
    x = username.charCodeAt(i);

    if(x===33 || x===44 || x===46 || x===64)
    {
        username = prompt("Enter a valid name please: ");
        

    }
}

*/

/* Task 14

var arr = ["cake","apple pie","cookie","chips","patties"];
var input = prompt("Welcome to the bakery\n\nWhat do you want to order, Sir/Ma'am?: ");
var len = arr.length;
var flag = 0;

for(var i=0; i<len; i++)
{
    if(arr[i]===input.toLocaleLowerCase())
    {
        alert(input+" is available at index "+i+" in our bakery");
        flag = 1;
        break;
    }
}
if(flag==0)
{
    alert("We are sorry. "+input+" is not available in our bakery.");
}

*/

/* Task 15

var x = prompt("Enter password: ");

var len = x.length;
var fIndex = x.slice(0,1);

if(len<6)
{
    document.write("Entered Password: "+x+"<br>");
    document.write("Password length is not enough!"+"<br>");
    document.write("Please Enter a valid password: ");
}
else if(fIndex.search(/[0-9]/i)!=-1)
{
    document.write("Entered Password: "+x+"<br>");
    document.write("Password cannot begin with a number"+"<br>");
    document.write("Please Enter a valid password: ");
}
else if(x.search(/[0-9,a-z]/gi)===-1)
{
    document.write("Entered Password: "+x+"<br>");
    document.write("Password needs at least one letter and one number"+"<br>");
    document.write("Please Enter a valid password: ");   
}
else{
    document.write("Thank you!");
}

*/

/* Task 16

var university = "University of Karachi";
var arr = university.split("");
var len = arr.length;

for(var i=0; i<len; i++)
{
    document.write(arr[i]+"<br>");
}

*/

/* Task 17

var input = prompt("Enter input: ");

var len = input.length;

document.write("User Input: "+input+"<br>");
document.write("Last Character of input: "+input.charAt(len-1));

*/

/* Task 18

var str =  "The quick brown fox jumps over the lazy dog";

var len = str.length;

var flag = 0;

for(var i=0; i<len; i++)
{
    var temp = str.slice(i,i+1);

    if(temp.search(/t/i)!=-1)
    {
        var temp = str.slice(i+1,i+2);

        if(temp.search(/h/i)!=-1)
        {
            var temp = str.slice(i+2,i+3);

            if(temp.search(/e/i)!=-1)
            {
                flag++;
            }
        }
    }
}

document.write(flag);

*/

        // Chapter 26-30


/* Task 1

var int = +prompt("Enter positive integer: ");        

document.write("Number: "+int+"<br>");
document.write("Round off value: "+Math.round(int)+"<br>");
document.write("Floor value: "+Math.floor(int)+"<br>");
document.write("Ceil Value: "+Math.ceil(int)+"<br>");

*/

/* Task 2

var int = +prompt("Enter negative integer: ");        

if(int<0)
{
    document.write("Number: "+int+"<br>");
    document.write("Round off value: "+Math.round(int)+"<br>");
    document.write("Floor value: "+Math.floor(int)+"<br>");
    document.write("Ceil Value: "+Math.ceil(int)+"<br>");    
}
else{
    document.write("Incorrect Integer");
}

*/

/* Task 3

var num = +prompt("Enter a number: ");

document.write("The absolute value of "+num+" is "+Math.abs(num));

*/

/* Task 4

for(var i=0; i<2; i++)
{
    result = Math.random()*6+1;
    result = Math.floor(result);
    document.write("Random dice value: "+result+"<br>");
}

*/

/* Task 5

result = Math.random()*2+1;
result = Math.floor(result);
if(result===1)
{
    document.write("Random coin value: Heads");

}
else{
    document.write("Random coin value: Tails");

}

*/

/* Task 6

result = Math.random()*100+1;
result = Math.floor(result);
document.write("Random number between 1 and 100: "+result);

*/

/* Task 7

var input = prompt("Enter your weight in kilograms: ");

var x = parseFloat(input);

document.write("The weight of user is "+x+" kilograms");

*/

/* Task 8

var secretNumber = Math.random()*10+1;
secretNumber = Math.floor(secretNumber);

var input = +prompt("Enter a number between 1 and 10");

if(input>10 || input<1)
{
    document.write("Incorrect Input");
}
else{
    if(input===secretNumber)
    {
        document.write("Congratulations!");
    }
    else
    {
        document.write("Doesn't match!")
    }
}

*/

        // Chapters 31-34

/* Task 1

var date = new Date();

document.write(date);

*/

/* Task 2

var date = new Date();

x = date.getMonth();

switch(x)
{
    case 0:
        alert("Current Month: January");
        break;
    case 1:
        alert("Current Month: February");
        break;
    case 2:
        alert("Current Month: March");
        break;
    case 3:
        alert("Current Month: April");
        break;
    case 4:
        alert("Current Month: May");
        break;
    case 5:
        alert("Current Month: June");
        break;
    case 6:
        alert("Current Month: July");
        break;
    case 7:
        alert("Current Month: August");
        break;
    case 8:
        alert("Current Month: September");
        break;
    case 9:
        alert("Current Month: October");
        break;
    case 10:
        alert("Current Month: November");
        break;
    case 11:
        alert("Current Month: December");
        break;    
    default:
        alert("Incorrect Result");
}

*/

/* Task 3

var date = new Date();

x = date.getDay();

switch(x)
{
    case 0:
        alert("Today is: Sunday");
        break;
    case 1:
        alert("Today is: Monday");
        break;
    case 2:
        alert("Today is: Tuesday");
        break;
    case 3:
        alert("Today is: Wednesday");
        break;
    case 4:
        alert("Today is: Thursday");
        break;
    case 5:
        alert("Today is: Friday");
        break;
    case 6:
        alert("Today is: Saturday");
        break;
    default:
        alert("Incorrect result");

}

*/

/* Task 4

var date = new Date();

x = date.getDay();

switch(x)
{
    case 0:
        alert("It's Fun day");
        break;
    case 6:
        alert("It's Fun day");
        break;
    default:
        alert("Today is not Saturday or Sunday");

}

*/

/* Task 5

var x = new Date();
var y = x.getDate();

if(y<16)
{
    document.write("First fifteen days of the month");
}
else{
    document.write("Last days of the month");
}

*/

/* Tasks 6

var date = new Date();

document.write("Current Date: "+date+"<br>");
document.write("Elapased milliseconds since January 1, 1970: "+date.getTime()+"<br>");
document.write("Elapased minutes since January 1, 1970: "+(date.getTime()/(1000*60))+"<br>");

*/

/* Task 7

var date = new Date();

x = date.getHours();

if(x<12)
{
    document.write("Its A.M");
}
else{
    document.write("It's P.M");
}

*/

/* Task 8

var laterDate = new Date("Dec 31, 2020");

document.write(laterDate);

*/

/* Task 10

var refDate = new Date("2015");

var currDate = new Date();

var diff = currDate.getTime()-refDate.getTime();

var sec = diff/1000;

document.write("On reference date: "+currDate+"<br>");
document.write(sec+" have passed since beginning of 2015");

*/

/* Task 11

var x = new Date();
var y = new Date();
var z = x.getHours()-1;
y.setHours(z);

document.write("Current Date: "+x+"<br>");
document.write("1 hour ago, it was: "+y);

*/

/* Task 12

var x = new Date();
var y = new Date();
var z = x.getFullYear()-100;
y.setFullYear(z);

document.write("Current Date: "+x+"<br>");
document.write("100 years back, it was: "+y);

*/

/* Task 13

var input = prompt("Enter your birth date: ");
var currentDate = new Date();
var birthDate = new Date(input);
var diff = currentDate.getTime()-birthDate.getTime();
var age = diff/(1000*60*60*24*30*12);
age = Math.floor(age);

document.write("Your age is: "+age+"<br>");
document.write("Your birth year is: "+birthDate.getFullYear());

*/

/* Task 14

var customerName = prompt("Enter customer name: ");
var date = new Date();
var units = +prompt("Enter number of units: ");
var chargesPerUnit = 16;
var netBill = units*chargesPerUnit;
var lateCharges = 350;
var grossBill = netBill+lateCharges;

document.write("Customer Name: "+customerName+"<br>");
document.write("Month: "+findMonth(date.getMonth())+"<br>");
document.write("Number of units: "+units+"<br>");
document.write("Charges per unit: "+chargesPerUnit+"<br><br>");

document.write("Net amount payable(within due date): "+netBill+"<br>");
document.write("Late payment surcharges: "+lateCharges+"<br>");
document.write("Gross amount payable(after due date): "+grossBill);

function findMonth(monthNumber)
{
    switch(monthNumber)
    {
        case 0:
            return "January";
            break;
        case 1:
            return "February";
            break;
        case 2:
            return "March";
            break;
        case 3:
            return "April";
            break;
        case 4:
            return "May";
            break;
        case 5:
            return "June";
            break;
        case 6:
            return "July";
            break;
        case 7:
            return "August";
            break;
        case 8:
            return "September";
            break;
        case 9:
            return "October";
            break;
        case 10:
            return "November";
            break;
        case 11:
            return "December";
            break;    
        default:
            alert("Incorrect Result");

    } 
}

*/

        // Chapters 35-38

/* Tasks 1

dateTime();

function dateTime()
{
    document.write(new Date());
}

*/

/* Task 2

var firstName = "Shah";
var lastName = "Fahad";

fullName(firstName,lastName);

function fullName(firstName, lastName)
{
    document.write("Welcome "+firstName+" "+lastName+"!");
}

*/

/* Task 3

var num1 = +prompt("Enter first number: ");
var num2 = +prompt("Enter second number: ");
document.write("Sum is: "+sum(num1,num2));

function sum(num1, num2)
{
    return num1+num2;
}

*/

/* Task 4

var num1 = +prompt("Enter first number: ");
var num2 = +prompt("Enter second number: ");
var op = prompt("Enter operator: ");

document.write(calc(num1,num2,op));

function calc(num1,num2,op)
{

    if(op==="+")
    {
        return num1+num2;
    }
    else if(op==="-")
    {
        return num1-num2;
    }
    else if(op==="*")
    {
        return num1*num2;
    }
    else if(op==="/")
    {
        return num1/num2;
    }
    else if(op==="%")
    {
        return num1%num2;
    }
}

*/

/* Task 5

var input = +prompt("Enter a number: ");

sqr(input);

function sqr(num)
{
    document.write("Square of "+num+" is "+num*num);
}

*/

/* Task 6

var input = +prompt("Enter a number: ");

document.write("Factorial of "+input+" is "+fact(input));

function fact(num)
{
    result = num;

    for(var i=1; i<num; i++)
    {
        result = result*i;
    }
    return result;
}

*/

/* Task 7

var start = +prompt("Enter starting number: ");
var end = +prompt("Enter ending number: ");

counting(start,end);

function counting(start,end)
{
    for(var i=start; i<=end; i++)
    {
        document.write(i+"<br>");
    }
}

*/

/* Task 8

var base = +prompt("Enter base value: ");
var perp = +prompt("Enter perpendicular value: ");

document.write("Hypotenuse is: "+hypo(base,perp));

function hypo(base,perp)
{
    function nestHyp(base,perp)
    {
        var baseSq = base*base;
        var perpSq = perp*perp;
        var hypoSq = baseSq+perpSq;
        
        
        return hypoSq;
    }

    var hypo = Math.sqrt(nestHyp(base,perp));
    return  hypo;
}

*/

/* Task 9

var width = 5;
var height = 7;

area(5,7);
area(width,height);

function area(width,height)
{
    document.write("Area is "+(width*height)+"<br>");
}

*/

/* Task 10

var str = prompt("Enter a string: ");

isPalindrome(str.toLowerCase());

function isPalindrome(str)
{
    var revStr = str.split("").reverse().join("");

    if(str===revStr)
    {
        document.write("The string '"+str+"' is a palindrome!");
    }
    else{
        document.write("The string '"+str+"' is not a  palindrome!");
    }
    
}

*/

/* Task 11

var str = prompt("Enter a string: ");

document.write("Your String: "+str+"<br>");
document.write("Converted String: "+toTitleCase(str));

function toTitleCase(str)
{

    var arr = str.split(" ");
    var len = arr.length;

    for(var i=0; i<len; i++)
    {
        var firstChar = arr[i].slice(0,1).toUpperCase();
        var remainingChar = arr[i].slice(1);
        var newElement = firstChar+remainingChar;
        arr[i] = newElement;
    }

    var newStr = arr.join(" ");

    return newStr;

}

*/

/* Task 12

var str = prompt("Enter a string: ");

document.write("Your string: "+str+"<br>");
document.write("Longest word: "+longestWord(str));

function longestWord(str)
{

    var arr = str.split(" ");
    var arrLen = arr.length;
    var longestWord = "";

    for(var i=0; i<arrLen; i++)
    {
        if(arr[i].length > longestWord.length)
        {
            longestWord = arr[i];
        }
    }

    return longestWord;

    

}

*/

/* Task 13

var str = prompt("Enter a string: ");
var char = prompt("Enter a character: ");

document.write("Your string: "+str+"<br>");
document.write("Your character: "+char+"<br>");
document.write("Number of occurences of '"+char+"' is: "+occur(str,char));

function occur(str,char)
{
    var str = "Mohammad Obaid Owais";
    var char = "o";
    var len = str.length;

    var flag = 0;

    for(var i=0; i<len; i++)
    {
        if(str.slice(i,i+1).toLowerCase()===char.slice(0,1).toLowerCase())
        {
            flag++;
        }
    }

    return flag;
}

*/

/* Task 14

var radius = +prompt("Enter radius of a circle: ");

calcCircumference(radius);
calcArea(radius);

function calcCircumference(r)
{
    document.write("The circumference is :"+(2*Math.PI*r)+"<br>");
}

function calcArea(r)
{
    document.write("The area is: "+(Math.PI*r*r)+"<br>");
}

*/

