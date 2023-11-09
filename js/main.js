'use strict';

const elementUl = document.querySelector('ul.list');

// 1 Creo un loop dove ad ogni iterazione il valore della varibile i che andiamo a definire aumentera di 1.

for (let i = 1; i <= 100; i++) {
  //dichiaro una variabile che nelle condizioni cambierà il suo valore
  let statoI = i;

  //creaiamo tramite js un elemento li
  const li = document.createElement('li');
  li.classList.add('box');

  // 2 Nel loop creiamo una condizione dove i multipli di 3 e 5 stampano in console la parola FizzBuzz, la condizione può essere che il resto della divisione tra valore di i in quel istante e 5 deve essere 0 e resto della divisione tra valore di i in quel istante e 3 deve essere 0.
  if (i % 3 === 0 && i % 5 === 0) {
    statoI = 'FizzBuzz';

    //aggiunagiamom una classe all'elemento li in modo tale che il box cambi colore
    li.classList.add('bg-color-fizzbuzz');
  }

  // 3 Nel loop creiamo una condizione dove i multipli di 3 stampano in console la parola Fizz, la condizione può essere che il resto della divisione tra valore di i in quel istante e 3 deve essere 0.
  else if (i % 3 === 0) {
    statoI = 'Fizz';

    //aggiunagiamom una classe all'elemento li in modo tale che il box cambi colore
    li.classList.add('bg-color-fizz');
  }

  // 4 Nel loop creiamo una condizione dove i multipli di 5 stampano in console la parola Buzz, la condizione può essere che il resto della divisione tra valore di i in quel istante e 5 deve essere 0.
  else if (i % 5 === 0) {
    statoI = 'Buzz';

    //aggiunagiamom una classe all'elemento li in modo tale che il box cambi colore
    li.classList.add('bg-color-buzz');
  }

  //5 stampiamo in console il valore di i attuale
  console.log(statoI);

  //nella lista andiamo a inserire i vari risultati dati dalle condizioni
  li.append(statoI);

  //che andiamo ad appendere alla lista che è presente nel nostro dom
  elementUl.append(li);
}
