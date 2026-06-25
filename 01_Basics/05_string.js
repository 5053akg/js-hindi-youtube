const name = "Anand"
const repoCount = 25

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Anand-Kr-Gupta")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5))
console.log(gameName.indexOf('p'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8,4)   // slice me negative use kr skte hai
console.log(anotherString)

const newStringOne = "    AnandKumar    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anand.com/anand%20Kumar"

console.log(url.replace('%20','-')) 

console.log(url.includes("abcds")) //asks whether present or not

console.log(gameName.split('-'))