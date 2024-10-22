'use strict';

let hasBikeLicense = false;
const passBikeTest = true;

if (passBikeTest) hasBikeLicense = true;
if (hasBikeLicense) console.log('I can ride a bike 🚴‍♂️');

function greet() {
  console.log('Hello, my name is Mark');
}

greet();
greet();
greet();

function smoothieProcessor(bananas, strawberries) {
  const smoothie = `Smoothie with ${bananas} bananas and ${strawberries} strawberries.`;
  return smoothie;
}

const bananaSmoothie = smoothieProcessor(3, 0);
console.log(bananaSmoothie);

const bananaStrawberrySmoothie = smoothieProcessor(1, 5);
console.log(bananaStrawberrySmoothie);

const someNumber = Number('42');
