// 1 push 
// Method push digunakan untuk menambah satu atau lebih data baru di ahir dari sebuah array.

//  syntax :array.push(item1, item2, ..., itemX)

// const myNum = [1, 2, 3]
// myNum.push(4);  
// console.log(myNum)
// outputnya : [1, 2, 3, 4]

// 2. Pop
// Method pop adalah kebalikan dari push.
// Method pop digunakan untuk menghapus item terakhir dari sebuah array.
// Method pop tidak perlu menggunakan argumen.

// const myNum = [1, 2, 3]
// myNum.pop()
// console.log(myNum)
// outputnya : [1, 2]

// 3. Unshift
// Kalau push digunakan untuk menambah item baru di ahir sebuah array, maka method unshift digunakan 
// untuk menambah item baru di awal sebuah array.
// array.unshift(item1, item2, ..., itemX) syntax
// contoh:
// const myNum = [3, 4]
// myNum.unshift(1, 2);
// console.log(myNum)
// outputnya : [1, 2, 3, 4]

// 4. Shift
// Shift adalah kebalikan dari unshift.
// Digunakan untuk menghapus item pertama dari sebuah array.
// Contoh :
// const myNum = [1, 2, 3]
// myNum.shift();
// console.log(myNum)
// outputnya : [2, 3]

// 5. Includes
// Method includes digunakan untuk mengecek apakah sebuah array memilik element tertentu.
// Misal kita punya sebuah array seperti ini

// const fruits = ['apple', 'banana', 'cherry']
// Kemudian kita perlu mengecek apakah dalam array tersebut terdapat item dengan nama ‘apple’.
// Jika item yang di cari ada dalam array maka akan mereturn true, baliknya meruturn false;

// const fruits = ['apple', 'banana', 'cherry']
// fruits.includes('apple') // return true
// fruits.includes('mango') // return false
 
// array.includes(element, start) syntax

// Parameter kedua dari method includes bersifat optional ya.
// Defaultnya adalah 0.
// Parameter ini gunanya untuk memberi tahu dari index ke berapa pengecekannya di mulai.
// contoh

// const fruits = ['apple', 'banana', 'cherry']
// fruits.includes('apple', 1) 
// return false karna pengecekan di mulai dari index 1

// 6. indexOf
// Method indexOf digunakan untuk mencari letak sebuah item dalam array.
// Bila item yang di maksud ada di dalam array, maka akan mereturn index dari item sebaliknya akan mereturn -1
// Contoh:
// const fruits = ['apple', 'banana', 'cherry']
// fruits.indexOf('apple') // return 0
// fruits.indexOf('mango') // return -1
// // Syntax:
// array.indexOf(element, start)
// Parameter kedua gunanya untuk memberi tahu dari index ke berapa pengecekannya di mulai.
// Jadi sama seperti method includes yang kita pelajari sebelumnya.

// 7. Concat
// Method concat digunakan untuk menggabungkan 2 atau lebih array.
// Syntax:
// array1.concat(array2, array3, ...arrayX)
// // Contoh :
// const debian = ['ubuntu', 'mint', 'kali']
// const redhat = ['rhel', 'centos']
// const arch = ['manjaro', 'chakra']
// const linuxDistro = debian.concat(redhat, arch)
// console.log(linuxDistro)
// output : ['ubuntu', 'mint', 'kali', 'rhel', 'centos', 'manjaro', 'chakra' ]

// 8. Slice
// Method slice digunakan untuk memilih satu atau beberapa item dari sebuah array.
// Misal kita punya array seperti ini.
// const fruits = ['apple', 'banana', 'cherry']
// // Kita mau mengambil 2 item, yaitu ‘apple’ dan ‘banana’.
// // Dengan method slice caranya seperti ini.
// const fruits = ['apple', 'banana', 'cherry']
// fruits.slice(0, 2)
// outputnya ['apple', 'banana']
// Syntax:
// array.slice(start, end)
// Metode slice() memilih elemen yang dimulai dari argumen awal yang diberikan, dan berakhir pada, tetapi tidak menyertakan, argumen akhir yang diberikan.

// 9. Splice
// Metode splice() bisa digunakan untuk menambahkan, menghapus, atau mereplace item ke atau dari sebuah array.
// Syntax:
// array.splice(index, berapaBanyak, item1, ….., itemX)
// Contoh menghapus item dengan method splice
// const fruits = ['apple', 'banana', 'cherry']
// fruits.splice(0, 1) // menghapus 1 item di index 0
// console.log(fruits) // ['banana', 'cherry']
// // Contoh mereplace item dengan method splice
// const fruits = ['apple', 'banana', 'cherry']
// fruits.splice(0, 1, 'mango') 
// // menghapus 1 item di index 0 dan menambah 'mango' di index 0
// console.log(fruits) // ['mango', 'banana', 'cherry']
// // Contoh menambah item dengan method splice
// const fruits = ['apple', 'banana', 'cherry']
// fruits.splice(0, 0, 'mango') 
// // menambah 1 item di index 0 
// console.log(fruits) // [ 'mango', 'apple', 'banana', 'cherry' ]

// 10. Sort
// Sesuai namanya, method sort digunakan untuk mengurutkan item dalam sebuah array.
// Uratannya bisa numeric atau alphabetic, bisa ascending (keatas) ataudescending (kebawah).
// Contoh:
// const myNum = [11, 18, 100, 25, 30]
// myNum.sort() // output ->[ 100, 11, 18, 25, 30 ]
// Perhatikan!
// Hasilnya jadi aneh kan?
// Ini karna secara default method sort akan mengurutkan secara alphabetic dan ascending.
// Kita perlu menambahkan parameter berupa sebuah function pada method sort.
// Fungsi yang mendefinisikan alternatif urutan pengurutan.
// Fungsi harus mengembalikan nilai negatif, nol, atau positif, tergantung pada argumen.
// Contoh:
// const myNum = [11, 18, 100, 25, 30]
// myNum.sort(function(a,b){return a- b}) 
// // output -> [ 11, 18, 25, 30, 100 ]
// // Contoh:
// const myNum = [11, 18, 100, 25, 30]
// myNum.sort(function(a,b){return b - a})
// output -> [ 100, 30, 25, 18, 11 ]