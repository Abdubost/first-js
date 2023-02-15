alert("hello");
alert("sizdan sorov qilsak boladimi?")

let person = prompt("Please enter your email", "");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}
let num = prompt("Please enter your number", "");
let content;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}
let name = prompt("Please enter your name", "");
let str;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}

console.log(person)
console.log(num)
console.log(name)