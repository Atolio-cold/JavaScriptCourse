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


function calculateYears(birthYear, currentYear) {
    return currentYear - birthYear;
  }
  
  const ageMike = calculateYears(1985, 2037);
  console.log(`Mike ma ${ageMike} lat.`);
  

  const calculateDifference = function (year1, year2) {
    return year1 - year2;
  };
  
  const yearDifference = calculateDifference(2037, 2000);
  console.log(`Różnica między latami wynosi ${yearDifference} lat.`);
  

  const yearsToRetirement = (birthYear, name) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement > 0 ? `${name} przejdzie na emeryturę za ${retirement} lat.` : `${name} jest już na emeryturze.`;
  };
  
  console.log(yearsToRetirement(1985, 'Mike'));
  console.log(yearsToRetirement(1950, 'Anna'));
  
 
  function prepareJuice(fruit, quantity) {
    return `${quantity} szklanek soku z ${fruit}.`;
  }
  
  function makeFruitJuice(apples, oranges) {
    const appleJuice = prepareJuice('jabłek', apples);
    const orangeJuice = prepareJuice('pomarańczy', oranges);
    return `Przygotowano: ${appleJuice} i ${orangeJuice}.`;
  }
  
  console.log(makeFruitJuice(3, 2));
  