// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { expect } = require("@jest/globals");
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe("arrayRandomizer", ()=>{
    it( "a function that takes in an array, removes the first item from the array and shuffles the remaining content.", ()=>{
        var colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    
        // use expect method to ttake in variable and use expect.arrayContaining() to test remianing conent
        expect(arrayRandomizer(colors1)).toEqual(
          expect.arrayContaining(["yellow", "blue", "pink", "green"])),
        expect(arrayRandomizer(colors2)).toEqual(
          expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    });
})


// b) Create the function that makes the test pass.
// Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
// use .shift to remove the first item
const arrayRandomizer = (array) => {
    array.shift()
    //iterate over array with .map
   let betterArr = array.map((value,index,array) => {
        // use the index / array params 
        let math = Math.floor(Math.random() * (index))
        let newIndex = array[index]
        // take each value in the array and set it equal to the array with the randomizer
        array[index] = array[math]
        // return the randomizer array and set it equal to the created variables array
        return array[math] = newIndex
    })
    return betterArr
}


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
describe("minAndMax", () => {
  it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
    var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
    var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]
    expect(minAndMax(nums1)).toEqual([-8, 90]),
      expect(minAndMax(nums2)).toEqual([5, 109]);
  });
});

// b) Create the function that makes the test pass.
// use math min to get the smallest number and 
//math max to get the largest number
// add both to an array and return

const minAndMax = (array) => {
    return [Math.min(...array), Math.max(...array)]
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("uniqueNums", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
    var testArray1 = [3, 7, 10, 5, 4, 3, 3]
    var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
      expect(uniqueNums(testArray1, testArray2)).toEqual([
        3, 7, 10, 5, 4, 8, 2, 1,
      ]);
  });
});

// b) Create the function that makes the test pass.
// use tool new Set
// concat the two array and use tool to go over the values and return the values as a new array.

// const uniqueNums = (array1, array2) =>{
//     let concatArr = array1.concat(array2)
//     let newArray = [...new Set(concatArr)]
//     return newArray
// }

// const uniqueNums = (array1, array2) => {
//   return [...new Set([...array1, ...array2])];
// };
