//1
function change(string, valueToReplace, valueToReplaceWith) {
  var newString = string.replace(valueToReplace, valueToReplaceWith);
  return newString;
}

console.log(change("It is my Skillwill assaignment.", "my", "your"));

//2

const sentenceDivider = (sentence) => {
  let words = sentence.split(" ");
  let result = "";
  let newWord;
  words.map((word) => {
    newWord = (word.slice(0, 1).toUpperCase() + word.slice(1)).concat(" ");
    result += newWord;
  });
  return result + ".";
};
console.log(sentenceDivider("it is my skillwill assignment"));

//3

let arr = [
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
  { name: "Pavle", age: 1 },
  { name: "Petre", age: 10 },
  { name: "Archil", age: 56 },
];
console.log(
  arr.sort((p1, p2) => (p1.age < p2.age ? -1 : p1.age > p2.age ? 1 : 0))
);
