function konversiMenit(menit) {
  const jam = Math.floor(menit / 60);
  const sisaMenit = menit % 60;

  let menitFormat;
  if (sisaMenit < 10) {
    menitFormat = `0` + sisaMenit;
  } else {
    menitFormat = sisaMenit;
  }
  return `${jam}:${menitFormat}`;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
