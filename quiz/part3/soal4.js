console.log('Perulangan dengan Pertambahan 2:');
for (let counter = 1; counter < 100; counter += 2) {
  if (counter % 3 === 0) {
    console.log(counter + ' Kelipatan 3');
  }
}

console.log('Perulangan dengan Pertambahan 5:');
for (let counter = 1; counter < 100; counter += 5) {
  if (counter % 6 === 0) {
    console.log(counter + ' Kelipatan 6');
  } 
}

console.log('Perulangan dengan Pertambahan 9:'); 
for (let counter = 1; counter < 100; counter += 9) {
  if (counter % 10 === 0) {
    console.log(counter + ' Kelipatan 10');
  }
}
