'use strict';

const elementUl = document.querySelector('ul.list');

console.log(elementUl);

// 1 Creo un loop dove ad ogni iterazione il valore della varibile i che andiamo a definire aumentera di 1.

for (let i = 1; i < 101; i++) {
  //dichiaro una variabile che nelle condizioni sarà definita
  let statoI;

  // 2 Nel loop creiamo una condizione dove i multipli di 3 e 5 stampano in console la parola FizzBuzz, la condizione può essere che il resto della divisione tra valore di i in quel istante e 5 deve essere 0 e resto della divisione tra valore di i in quel istante e 3 deve essere 0.
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
    statoI = 'FizzBuzz';
  }

  // 3 Nel loop creiamo una condizione dove i multipli di 3 stampano in console la parola Fizz, la condizione può essere che il resto della divisione tra valore di i in quel istante e 3 deve essere 0.
  else if (i % 3 === 0) {
    console.log('Fizz');
    statoI = 'Fizz';
  }

  // 4 Nel loop creiamo una condizione dove i multipli di 5 stampano in console la parola Buzz, la condizione può essere che il resto della divisione tra valore di i in quel istante e 5 deve essere 0.
  else if (i % 5 === 0) {
    console.log('Buzz');
    statoI = 'Buzz';
  }

  //5 stampiamo in console il valore di i attuale
  else {
    console.log(i);
    statoI = i;
  }

  //6 creaiamo tramite js un elemento li
  const li = document.createElement('li');
  li.innerHTML = statoI;

  //7 che andiamo ad apeendere alla lista che è presente nel nostro dom
  elementUl.append(li);
}
