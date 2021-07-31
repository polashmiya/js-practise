//sum of first 10 natural numbers
// let sum = 0;
// for (var i = 0; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

// let array = [74, 3, 5, 2];
// let target = 76;
// for (var i = 0, j = 1; i < array.length, j < array.length; i++, j++) {
//   if (array[i] + array[j] === target) {
//     console.log(i, j);
//   }
//   i++;
//   j++;
//}
// let numbers = [4, 45, 4, 4, 54, 45];
// let sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

// JavaScript tip and tricks 01

// 1. Remove falsy values from array
// const items = ["Apple", "", "Mango", null, false, "Orange", undefined, 0];
// const withOutFalsyValue = items.filter(Boolean);
// console.log(withOutFalsyValue);
// console.log(Boolean());

// 2. Convert any value to boolean

//  const string = "Bulbul"
//  console.log(!!string);
//  console.log(Boolean(string));

// 3. Resizing any array
// const array =[5,6,3,5,6,7]
// array.length =4;
// console.log(array);
// console.log(array.length);

// 4. Flatten multi-dimensional array
// const multiDimensionalArray = [
//   "hello",
//   4556,
//   "mango",
//   ["fist", "Second", ["third", ["fourth", ["fifth", "sixth"]]]],
//   ["Orange", ["apple", "biscuit", ["bulbul", "mizan"]]],
//   56,
// ];
// const flattenArray = multiDimensionalArray.flat(Infinity);
// console.log(flattenArray);

// 5. Short conditionals

// const dev = "bulbul";
// dev === "bulbul" && console.log("work");
// dev === "bulbul" || console.log("its also");

// 6. Replace all occurrences of a string

// const sentence =
//   "I am a very poor person in the world. In world there are many kind of poor people. Poor people are not very happy in the world. We should help the poor people.Because Poor people are so much poor.";
// const result = sentence.replace(/poor/g, "rich"); //globalReplace
// const result1 = sentence.replace(/poor/gi, "rich"); //globalWithCaseSensetive
// console.log(result);
// console.log(result1);

// 7. Log values with variable names
// const devOne = "bulbul";
// const devTwo = "Mesbah";
// console.log(`davOne : ${devOne} devTwo : ${devTwo}`);
// console.log({devOne,devTwo});

// 8. Know performance of task

// const startTime = performance.now();
// for (let i = 0; i < 5000; i++) {
//   console.log(i);
// }
// const endTime = performance.now();
// console.log(endTime - startTime);

// JavaScript tips and tricks two

// 1. How to swap values?
// const array = [5, 4, 3, 2, 1];
// let a = 5;
// let b = 6;
// [a,b]=[b,a]
// temp=a;
// a=b;
// b=temp;
// console.log(a,b);
// temp=array[0]
// array[0]=array[4]
// array[4]=temp
// console.log(array);
// [array[0],array[4]]=[array[4],array[0]]
// console.log(array);
// b=a+(a=b)-b
// console.log(a,b);

// 2. How to copy things to clipboard?

// function copyToClipboard(text) {
//   const element = document.createElement("textarea");
//   element.value = text;
//   document.body.appendChild(element);
//   element.select();
//   document.execCommand("copy");
//   document.body.removeChild(element);
// }
// function clickHandler() {
//   let text = document.querySelector(".text");
//   copyToClipboard(text.innerText);
// }

// 3. How to destructure objects by aliases?its like a nickname

// const newObject = {
//   name: "Language",
//   founded: 1996,
//   founder: "Brenden Eich",
// };
// const { name: languageName, founder: creatorName } = newObject;
// console.log(languageName, creatorName);

// 4. How to get value as data type?

// const input = document.querySelector(".input").valueAsNumber;
// console.log(input);
// 5. How to remove duplicates from an array?
// const array = ["hello", "hi", "hey", "hello", "hi", "Oye"];
// const uniqueArray = [...new Set(array)];
// console.log(uniqueArray);

// 6. How to compare two arrays by values?
// const arrayOne = [3, 4, 5];
// const arrayTwo = [3, 4, 5,6];
// const equalArray = (a, b) => {
//  return a.length === b.length &&
//    a.every((val, i) => val === b[i]);
// };
// console.log(equalArray(arrayOne,arrayTwo));

// 7. How to shuffle an array?
// const array = [1, 2, 3, 4, 5];
// const suffleArray = array.sort(() => Math.random() - 0.5);
// console.log(suffleArray)

// 8. How to use Comma Operator
// const a =(3,6)
// console.log(a)
