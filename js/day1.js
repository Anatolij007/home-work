// ====================task1
// You need to calculate amount of tip to give in a restaurant/cafe.
//  Workflow:
// 1.   User inputs check sum. (Use “prompt” function).
// 2.   User inputs tip percentage. (Use “prompt” function) % чайових
// 3. For an empty string or cancelled input, show “Canceled.” повідомлення скасовано
// 4.   You need to validate the input data: both values should be numbers, check sum can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// 5.   If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// 6.   You need to calculate tip amount and total sum to pay.
// 7.   Show message: (example). Use ”alert” function
// Check sum: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230
// const checkSum = prompt("Веедіть суму чеку");
// const tip = prompt("Введіть відсоток чайових");
// if (checkSum === null || checkSum === "" || tip === null || tip === "") {
//   alert("cancel");
// } else {
//   const parstCheckSum = Number.parseFloat(checkSum);
//   const parstTip = Number.parseFloat(tip);
//   if (
//     Number.isNaN(parstCheckSum) ||
//     Number.isNaN(parstTip) ||
//     parstCheckSum < 0 ||
//     parstTip < 0 ||
//     parstTip > 100
//   ) {
//     alert("Invalid input data");
//   } else {
//     const totalTip = Number((parstCheckSum * (parstTip / 100)).toFixed(2));
//     const totalSum = Number((parstCheckSum + totalTip).toFixed(2));
//     alert(
//       `Check sum ${parstCheckSum},\n
// Tip ${parstTip}%,\n
// Tip amount ${totalTip},\n
// Total sum to pay ${totalSum}`
//     );
//   }
// }
// ====================task2
// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.
// Examples:
//  For user input “test” should return “es”
//  For user input “character” should return “a”
//  For user input “B” should return “B”
//  For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”
// const userWord = prompt("Please enter any word");
// if (userWord === null || userWord.trim() === "") {
//   alert("Invalid value");
// } else {
//   const wordLength = userWord.length;
//   const startIndex = wordLength / 2 - 1;
//   const endIndex = startIndex + 2;
//   let result;
//   if (wordLength % 2 === 0) {
//     result = userWord.slice(startIndex, endIndex);
//   } else {
//     const startIndex = (wordLength - 1) / 2;
//     const endIndex = startIndex + 1;
//     result = userWord.slice(startIndex, endIndex);
//   }
//   alert(result);
// }
