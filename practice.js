// Problem 1
const mobile = "Xiaomi Redmi Note 7";
let mobilePrice = 17500;

const mobileSpecs = {
  camera: 48,
  storage: 64,
  ram: 4,
};

// Problem 2

const phone = `My handset nmae is: ${mobile}
and it's price is: ${mobilePrice}৳,
 it has a ${mobileSpecs.ram} gigs of storage,
  ${mobileSpecs.camera} megapixel of beautiful camera and ${mobileSpecs.ram} gigs of ram  `;
console.log(phone);

// Problem 3

const muliplication = (number) => number / 5;
console.log(muliplication(85));

// Problem 4

const addMulti = (num1, num2) => (num1 + 2) * (num2 + 2);
console.log(addMulti(4, 2));

// Problem 5

const trippled = (num1, num2, num3) => num1 * num2 * num3;
console.log(trippled(3, 4, 5));

// function muliplication2(num1, num2, num3) {
//   return num1 * num2 * num3;
// }
// console.log(muliplication2(3, 4, 5));

// Problem 6

const myArr = [23, 25, 46, 75, 86, 77, 95, 84, 17, 99, 100];
const newArr = myArr.map((myArr) => myArr * 5);
console.log(newArr);

// Problem 7
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 23, 15, 26, 28, 29, 30];
const odd = arr.filter((arr) => arr % 2 != 0);
console.log(odd);

// Problem 8

const mobileShop = [
  { name: "Redmi Note 8", price: 19000 },
  { name: "Samsung Galaxy S 18+", price: 45000 },
  { name: "iPhone 23", price: 145000 },
  { name: "F9 Air Pods", price: 5000 },
  { name: "Apple Air Pods", price: 15000 },
];

const result = mobileShop.find((mobile) => mobile.price == 5000);
console.log(result);

//  জাভাস্ক্রিপ্ট MAP দিয়ে কোনো একটা ARRAY এর প্রত্যেক্টা ইলিমেন্টকে গানিতিক কাজ করে রিটার্ন কর যায়।

//  জাভাস্ক্রিপ্ট forEach দিয়ে কোনো একটা ARRAY এর প্রত্যেক্টা ইলিমেন্টকে গানিতিক কাজ করে রিটার্ন কর যায় না।

//  জাভাস্ক্রিপ্ট filter দিয়ে কোনো একটা ARRAY এর প্রত্যেক্টা ইলিমেন্টে শর্ত দিয়ে গানিতিক কাজ করে  শর্ত পূরণকারি ইলিমেন্টদের রিটার্ন করা যায়।

//  জাভাস্ক্রিপ্ট find দিয়ে কোনো একটা ARRAY এর প্রত্যেক্টা ইলিমেন্টে শর্ত দিয়ে গানিতিক কাজ করে  শর্ত পূরণকারি ইলিমেন্টদের মাঝে থেকে প্রথমটা রিটার্ন করা যায়।

// Problem 9
// সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।

const student = { name: "Mahbub Hossain", age: 21, eyeColor: "Black" };

const { name, age, eyeColor } = student;

console.log(name, age, eyeColor);

// Problem 10
// [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।

const numbers = [12, 13, 14, 53, 49, 75, 68, 97, 46, 95, 96];

const [, , three] = numbers;
console.log(three);

// Problem 11
// তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে
function addition(num1, num2, num3 = 7) {
  return num1 + num2 + num3;
}
console.log(addition(2, 4));

// Problem 12
// একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

const nestedObject = {
  name: "Mahbub Hossain",
  age: 21,
  height: 5.2,
  hobby: {
    first: "travelling",
    second: "playing cricket",
    third: {
      mostLike: ["watching football", "playing cards"],
      mostHate: "WWW",
    },
  },
};

// const likesImost = (nestedObject) => {
//   nestedObject.hobby.third.mostLike;
// };
console.log(nestedObject.hobby.third.mostLike);

// Problem 13
// উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।

const nestedObject = {
  name: "Mahbub Hossain",
  age: 21,
  height: 5.2,
  hobby: {
    first: "travelling",
    second: "playing cricket",
    third: {
      mostLike: ["watching football", "playing cards"],
      mostHate: "WWW",
    },
  },
};

console.log(nestedObject.hobby?.good?.third.mostLike);
