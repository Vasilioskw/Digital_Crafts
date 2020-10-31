function show_First(n) {

our_Array = ["Bob", "Bill", "Jim"];


console.log(our_Array[n])}


show_First(1)


function remove_last() {

our_Array1 = ["Bob", "Bill", "Jim"];

our_Array1.pop()
console.log(our_Array1)

}

remove_last()



function print_Random() {
our_Array2 = ["Bob", "Bill", "Jim"]

var item = our_Array2[Math.floor(Math.random() * our_Array2.length)];

console.log(our_Array2) }


print_Random()





function add_print(n) {

our_Array3 = [2,3,4]

our_Array3.unshift("1 is before 2") 


console.log(our_Array3) }

add_print()