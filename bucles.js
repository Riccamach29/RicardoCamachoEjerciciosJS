/* 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
multiplicar (Los primeros 10 multiplos). */

/* let numero = prompt('Ingrese un número');

for (let i = 1; i <= 10; i++) {
    console.table(`${numero} x ${i} = ${numero * i}`);
} */

/* 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0. */

/* let acumulador = 0;

while (true) {
    let numero = prompt('Ingrese un número (o 0 para terminar)');
    console.log(acumulador)
    if (numero === '0') {
        break;
    }

    acumulador += parseInt(numero);
} */

   /*  3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
variable guardar un numero que este en el rango 1 - 100. La persona debera poder
ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
felicitaciones y decirle en cuantos intentos lo ha realizado. */


/* const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinado = false;


while (adivinado === false) {
    let numeroUsuario = parseInt(prompt("Adivina el número entre 1 y 100:"));
    intentos++;
    
    if (numeroUsuario < numeroSecreto) {
        alert("El número es mayor. Intenta de nuevo.");
    } else if (numeroUsuario > numeroSecreto) {
        alert("El número es menor. Intenta de nuevo.");
    } else {
        adivinado = true;
        alert(`¡Felicitaciones! Adivinaste el número en ${intentos} intentos.`);
    }
} */

 /*    4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
    si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
    Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
    como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
    numero ya no es primo. */
/* 
    function esPrimo(numero) {
        if (numero <= 1) {
            return false;
        }
        
        for (let i = 2; i <= numero / 2; i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        
        return true;
    }

    let numero = prompt("Ingrese un número:");
    let numeroPrimo = esPrimo(parseInt(numero));
    
    if (numeroPrimo) {
        alert(`${numero} es un número primo.`);
    } else {
        alert(`${numero} no es un número primo.`);
    }  */

    /*     5. Realizar un programa que permita dado un numero, mostrar todos sus divisores. */

   /*   function mostrarDivisores(numero) {
        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                console.table(i);
            }
        }
    }
 
    let numero = prompt("Ingrese un número:");
    mostrarDivisores(parseInt(numero)); */

 /* 6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
muestre un mensaje por consola con cada uno de los elementos del array. */
/* function recorreArray(array) {
        for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
   
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
recorreArray(numeros) */
/* 
7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
doble de cada uno de los elementos. */

/* function doblarArray(array) {
        for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i] * 2);
    }
}

    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(numeros);
    doblarArray(numeros)  */

   /*  8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
que muestre un mensaje de presentacion por cada elemento del array. */

/* const familia = [
    { nombre: "Ricardo", edad: 38, relacion: "Padre", ocupacion: "Ingeniero" },
    { nombre: "Maha", edad: 38, relacion: "Madre", ocupacion: "Enfermera" },
    { nombre: "Esthefany", edad: 15, relacion: "Hija", ocupacion: "Estudiante" },
    { nombre: "Adriana", edad: 10, relacion: "Hija", ocupacion: "Estudiante" },
    { nombre: "Froilan", edad: 70, relacion: "Abuelo", ocupacion: "Jubilado" }
  ];
  
  function presentarFamilia(familia) {
    for (let persona of familia) {
      console.log(`Hola, me llamo ${persona.nombre}, tengo ${persona.edad} años, soy ${persona.relacion}, y soy ${persona.ocupacion}.`);
    }
  }
  
  presentarFamilia(familia); */

  /* 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
muestre los numeros impares. */

/* let numeros = [1, 5, 15, 20, 7, 40, 14, 65, 80, 34];

function mostrarImpares(numeros) {
  for (let numero of numeros) {
    if (numero % 2 !== 0) {
      console.log(numero);
    }
  }
}

mostrarImpares(numeros); */

/* 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
el usuario ingresa un 0. */

/* function calcularSumaParesImpares() {
    let sumaPares = 0;
    let sumaImpares = 0;
    let numero;
  
    do {
      
      numero = parseInt(prompt("Ingrese un número (0 para terminar):"), 10);
  
      
      if (numero !== 0) {
        if (numero % 2 === 0) {
          sumaPares += numero; 
        } else {
          sumaImpares += numero; 
        }
      }
    } while (numero !== 0);
  
    console.log(`La suma de los números pares es: ${sumaPares}`);
    console.log(`La suma de los números impares es: ${sumaImpares}`);
  }
  
  
  calcularSumaParesImpares(); */

 /*  11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas grande. */


/* function encontrarNumero(numeros) {
    let numeroMax = numeros[0];
  
    for (let i = 1; i < numeros.length; i++) { 
      if (numeros[i] > numeroMax) {
        numeroMax = numeros[i];
      }
    }
  
    console.log(`El número más grande es: ${numeroMax}`);
  }
  
  let numeros = [1, 9, 13, 78, 56, 34, 12, 90, 32, 45];
  encontrarNumero(numeros); */

  /* 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas chico. */

/*  function encontrarNumeroChico(numeros) {
    let numeroMin = numeros[0];
  
    for (let i = 1; i < numeros.length; i++) { 
      if (numeros[i] <numeroMin) {
        numeroMin = numeros[i];
      }
    }
  
    console.log(`El número más chico es: ${numeroMin}`);
  }
  
  let numeros = [1, 9, 13, 78, 56, 34, 12, 90, 32, 45];
  encontrarNumeroChico(numeros);  */

 /*  13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
un empate. Caso contrario mostrar un mensaje con el nombre de la persona
ganadora. */
  
/* function jugarPiedraPapelTijeras() {
    
    const jugador1 = prompt("Ingrese el nombre del Jugador 1:");
    const jugador2 = prompt("Ingrese el nombre del Jugador 2:");
  
    let ganador = null;
  
    function determinarGanador(mano1, mano2) {
      if (mano1 === mano2) {
        return "Empate";
      } else if (
        (mano1 === "piedra" && mano2 === "tijeras") ||
        (mano1 === "papel" && mano2 === "piedra") ||
        (mano1 === "tijeras" && mano2 === "papel")
      ) {
        return jugador1;
      } else {
        return jugador2;
      }
    }
  
    
    while (ganador === null) {
      
      const manoJugador1 = prompt(`${jugador1}, elige piedra, papel o tijeras:`);
      const manoJugador2 = prompt(`${jugador2}, elige piedra, papel o tijeras:`);
  
      
     const resultado = determinarGanador(manoJugador1, manoJugador2);
  
      if (resultado === "Empate") {
        console.log("¡Empate! Jueguen otra vez.");
      } else {
        ganador = resultado;
        console.log(`El ganador es ${ganador}.`);
      }
    }
  }
    
  jugarPiedraPapelTijeras(); */

/*   14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado. */
  
/* let asterisco = "* "

for (let i = 1; i <= 5; i++) {
  console.log(asterisco);
  asterisco += "* ";

} */

/*   15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
pero invertido. */

/* let asterisco = " * "

for (let i = 5; i >= 1; i--) {
  console.log(asterisco.repeat(i));
} */