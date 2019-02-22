Challenge 1

v1 = 1;
v2 = 64;

function condition() {
if (v1 == 65 || v2 == 65) 
	return true;

else if (v1 + v2 == 65) 
	return true;

else
	return false;
}
condition();

Challenge 2
var side1 =7;
var side2 =8;
var side3 =9;
var p =(side1 +side2+ side3)/2;
//(7+8+9)=24/2
	var triangle = Math.sqrt(p*((p-side1)*(p-side2)*(p-side3)));
	console.log(triangle);

Challenge 3

var num1 =10;
var num2 =11;
var num3 =12;
function largestOfThreeNumber (){
var max = Math.max((num1, num2, num3));
return max;
}
console.log(largestOfThreeNumber());

Challenge 4
	
function timeConvert (num){
var hours = Math.floor (num / 60);
var minutes = num % 60;
return (hours +  ":" + minutes + "minute(s)");
}
console.log(timeConvert(500))



Challenge 5

function matchingLetters() {
  var firstWord = "dono";
  var secondWord = "nonod";
  for(var dono = 0; dono < firstWord.length;dono++) {
  for(var nonod = 0; nonod < secondWord.length;nonod++) {
  if (firstWord[dono] == secondWord[nonod]) {
	  console.log(secondWord[nonod]);
  }
  }
  }
  }
matchingLetters()
	  
	  
	  

  
     
    
  



