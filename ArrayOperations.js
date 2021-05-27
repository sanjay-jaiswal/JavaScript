console.log("=============Welcome To Array Program In JavaScript===============");

//Array declaration
var arr = [true,1, 2, 3, 4];
console.log(arr.length);
arr.push(5);    //Push will add the element at the end of the array.
console.log(arr);

//Shift will return first element and will delete it from list.
First_Item = arr.shift();
console.log("After shift : "+arr);
console.log(First_Item); 
arr.push(First_Item); 

//Using unshift we can add 1 or more elements at the beginning of the array and return new length of array.
New_Length = arr.unshift('Sanju');
console.log("Array elements afte unshift : "+arr);
console.log("New array length after unshift : "+New_Length);

//Reverse array
new_array = arr.reverse()
console.log("Reversed array : "+new_array);

//sort array
new_array = arr.sort()
console.log("Sorted array : "+new_array);

//var arr = [1, 2, 3, 4, 10];
console.log(arr.sort());         // [1, 10, 2, 3, 4]
console.log(arr.sort((el1, el2) => el1 - el2));


//Declaration through array constructor
//Since Array is a global variable, it can be modified somewhere else in the script so it may not behave as you expected
var arr1 = new Array(21, 23, 13, 44,66,88,77);
console.log(arr1.length);
//Pop will delete last element of the array.
Last_Element = arr1.pop(); 
console.log(arr1);               
console.log("poped element is : " +Last_Element);

//Splice method
var fruits = ["Banana", "Orange", "Apple", "Mango"]; //At position 2, add the new items, and remove 1 item. 
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits);
fruits.splice(2, 2); //At position 2, remove 2 items
console.log(fruits);
fruits.splice(2, 0, "Lemon", "Kiwi");//add item to array
console.log("Array after adding item : "+fruits);

fruits[3] = "pineapple"; 
console.log(fruits);
