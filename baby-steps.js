let total = 0;

let array = process.argv;

for (let i = 2; i < array.length; i++) {
  total += Number(array[i]);
}

console.log(total);
