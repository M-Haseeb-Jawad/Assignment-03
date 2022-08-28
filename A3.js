var a = prompt("Enter your name ");
alert(a);
document.write("Welcome " + a);




//todo ********** Practising  Prompt **************
var question ="What is your Age ? ";
var age   = prompt(question );
var newage = age + 5;
console.log("Age : "+ newage)


 var question= "What is your name ";
 var name = prompt(question);
 console.log(name );





var question = "What is your class ";
var ans  = prompt(question);
 document.write("Class:" + ans);
var newans = ans + 2;
document.write("Class: " + newans);


var age = prompt("What is your Age? ");
console.log(age);

//~ ***********Confirm Methon **********
let deletepost = confirm("Are you really want to delte this post ");
console.log(deletepost);



// *************** Convet String to Integer************
var value1 = "3";
var value2 = "4";
var value3 = value1 +value2;
console.log(value3);

var age = prompt('What is your Age :');
var nm =4;
var sum = age + nm;
console.log(sum);



// *********** ParseInt ***************
//todo If you are sure that string has number then you use parseint function.
var questio = prompt("What is your age ");
var ans = 4;
var sum = parseInt(questio)+ ans;
console.log(sum);


var usdollar = parseInt(prompt("Enter an amount in USDollar "));
var Saudi = parseInt(prompt("Enter an amount in Saudi Riayl "));

document.write('<br>');

document.write("Amount in Pkr is : ",((usdollar * 177 )+(Saudi * 44)));

//^ *********** Parse Float 
var age = prompt("What is you age ");
var num1 = 4;
var sum = parseFloat(age) + num1;
console.log(sum);


//& ****** Convert String to Number 
var age = prompt("What is your age ");
var num2 =4;
//var sum = Number(age)+num;
// var sum = Number(num) + age;

var sum = age + num2;
console.log(sum);


//! Tofixed
// It rounds the specified number of decimals

var a = 5.3324;
var num3 = a.toFixed(3);
document.write(num3);


//To Precision
let num4 = 2.453109355;
let a01 = num4.toPrecision();
let z = num4.toPrecision(1);
let c = num4.toPrecision(2);
let d = num4.toPrecision(3);
let e = num4.toPrecision(4);
let n = a01 + "<br> "+ z + "<br>" + c + "<br> "+ d  + "<br>" +
e + "<br> ";
 
document.write(n);


//! ************ Comparison Operators */
var a =3;
console.log(a==6);
console.log(a===6);
console.log(a!=6);
console.log(a!==6);
console.log(a>=6);
console.log(a<=6);
console.log(a==3);
console.log(a=="3");
console.log(a==="3");

//todo ************ Logical Operator **************    &&
var a02=60;
var b = a02>50 && a02<70;
alert(b);


//todo || operator
var a03= 60;
var b = a03> 50 || a03<10;
alert(b);

// !Logical Not

alert(!true);

var a= 60;
var b = !(a<50);
alert(b);

alert(!!1);


alert(!!0);

//&  ******** Conditions If*************
var age =12;
if(age>9)
{
    console.log('age = '+ age);
}


var age = 18;
if(age >=18)
{
    console.log("Qualifies for driving");
}
else{
    console.log("Does not Qualifies for driving")
}


//* Conditions Else if
var score =80;
if(score> 80)
{
    console.log("Grade A ");
}
else if(score>70)
{
    console.log("Grade B ");
}
else if(score>60)
{
    console.log("Grade C ");
}
else{
    console.log("Failed");
}

//^ Conditions Nested If
var score = 80;
if(score>=80)
{
    console.log("Grade A");
    if(score>90)
    {
        console.log("Rewards 100 $");
    }
    
}



//todo Confirm () Mehtod
let text;
if(confirm ("Press a Button!"))
{
    text = 'you pressed Ok!';
}
else{
    text = "You Cancelled!";
}
console.log(text);

//! Number to Boolean
var age =45;
if(age)
{
    console.log("In if age = "+ age) ;
}
else
{
    console.log("In els age =" + age);

}



//& Set of Conditions 
var input = "M";
if(input == "A" && input == "E" && input =="I" && input=="O"  && input == "U" )
{
    console.log("Vowel Letters ");
}

else{
    console.log("It's a consonants")
}


//todo Null To Boolean 
var name = null;
if(name )
{
    console.log("in if name = " + name);

}
else
{
    console.log("In Else name = "+ name );
}


//*******Undefifned to Boolean  */
var name ;
if(name)
{
    console.log("In if name "+ name );
}
else
{
    console.log("IN else name = "+ name );

}



//* Value conversion to Boolean &&
var a1 = "Cat " && true;
console.log(a1);

var a2 = "Dog " && false;
console.log(a2);

var a3 = false && false;
console.log(a3);




//? Value Conversion to Boolean ||
var v1= "Cat" || true;
console.log(v1);

var v2 = "dog " || "Lion ";
console.log(v2);

var a3 = false || " ";
console.log(a3);

var a4 = 0 || 1;
console.log(a4);

var a5 = undefined || "Cat ";
console.log(a5);