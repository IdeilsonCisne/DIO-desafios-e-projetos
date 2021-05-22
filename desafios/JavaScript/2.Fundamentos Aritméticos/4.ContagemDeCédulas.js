/**
 * Contagem de Cédulas
 * 
 * Desafio
 *    Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) 
 * onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. 
 * Na sequência mostre o valor lido e a relação de notas necessárias.
 * 
 * Entrada
 *    Você receberá um valor inteiro N (0 < N < 1000000).
 * 
 * Saída
 *    Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo 
 * de saída abaixo. Após cada linha deve ser imprimido o fim de linha.
 */

// TODO: Refatorar código

let valor = parseInt(gets());

let quociente;
let resto;
let count100 = 0;
let count050 = 0;
let count020 = 0;
let count010 = 0;
let count005 = 0;
let count002 = 0;
let count001 = 0;

if(valor >= 100){
  console.log(valor);
  quociente = parseInt(valor / 100);
  count100 = quociente;
  console.log(count100 + " nota(s) de R$ 100,00");
  resto = valor % 100;
  
  if(resto >= 0 || resto >= 50 ){
    quociente = parseInt(resto / 50);
    count050 = quociente;
    console.log(count050 + " nota(s) de R$ 50,00");
    resto = resto % 50;
    
    if(resto >= 0 || resto >= 20){
      quociente = parseInt(resto / 20);
      count020 = quociente;
      console.log(count020 + " nota(s) de R$ 20,00")
      resto = resto % 20;
      
      if(resto >= 0 || resto >= 10){
        quociente = parseInt(resto / 10);
        count010 = quociente;
        console.log(count010 + " nota(s) de R$ 10,00");
        resto = resto % 10;
        
        if(resto >= 0 || resto >= 5){
          quociente = parseInt(resto / 5);
          count005 = quociente;
          console.log(count005 + " nota(s) de R$ 5,00");
          resto = resto % 5;
          
          if(resto >= 0 || resto >= 2){
            quociente = parseInt(resto / 2);
            count002 = quociente;
            console.log(count002 + " nota(s) de R$ 2,00");
            resto = resto % 2;
            
            if(resto >= 0 || resto >= 1){
              quociente = parseInt(resto / 1);
              count001 = quociente;
              console.log(count001 + " nota(s) de R$ 1,00");
              resto = resto % 1;
            }
          }
        }
      }
    }
  }
}
  
else if(valor >= 50){
  console.log(valor);
  quociente = parseInt(valor / 50);
  resto = valor % 50;
  count050 = quociente;
  console.log(count100 + " nota(s) de R$ 100,00");
  console.log(count050 + " nota(s) de R$ 50,00");
  
  if(resto >= 0 || resto >= 20){
    quociente = parseInt(resto / 20);
    count020 = quociente;
    console.log(count020 + " nota(s) de R$ 20,00");
    resto = resto % 20;
    
    if(resto >= 0 || resto >= 10){
      quociente = parseInt(resto / 10);
      count010 = quociente;
      console.log(count010 + " nota(s) de R$ 10,00");
      resto = resto % 10;
      
      if(resto >= 0 || resto >= 5){
        quociente = parseInt(resto / 5);
        count005 = quociente;
        console.log(count005 + " nota(s) de R$ 5,00");
        resto = resto % 5;
        
        if(resto >= 0 || resto >= 2){
          quociente = parseInt(resto / 2);
          count002 = quociente;
          console.log(count002 + " nota(s) de R$ 2,00");
          resto = resto % 2;
          
          if(resto >= 0 || resto >= 1){
            quociente = parseInt(resto / 1);
            count001 = quociente;
            console.log(count001 + " nota(s) de R$ 1,00");
            resto = resto % 1;
          }
        }
      }
    }
  }
}


else if(valor >= 20){
  quociente = parseInt(resto / 20);
  count020 = quociente;
  console.log(count100 + " nota(s) de R$ 100,00");
  console.log(count050 + " nota(s) de R$ 50,00");
  console.log(count020 + " nota(s) de R$ 20,00");
  resto = resto % 20;
  
  if(resto >= 0 || resto >= 10){
    quociente = parseInt(resto / 10);
    count010 = quociente;
    console.log(count010 + " nota(s) de R$ 10,00");
    resto = resto % 10;
    
    if(resto >= 0 || resto >= 5){
      quociente = parseInt(resto / 5);
      count005 = quociente;
      console.log(count005 + " nota(s) de R$ 5,00");
      resto = resto % 5;
      
      if(resto >= 0 || resto >= 2){
        quociente = parseInt(resto / 2);
        count002 = quociente;
        console.log(count002 + " nota(s) de R$ 2,00");
        resto = resto % 2;
        
        if(resto >= 0 || resto >= 1){
          quociente = parseInt(resto / 1);
          count001 = quociente;
          console.log(count001 + " nota(s) de R$ 1,00");
          resto = resto % 1;
        }
      }
    }
  }
}

else if(valor >= 10){
  quociente = parseInt(resto / 10);
  count010 = quociente;
  console.log(count100 + " nota(s) de R$ 100,00");
  console.log(count050 + " nota(s) de R$ 50,00");
  console.log(count020 + " nota(s) de R$ 20,00");
  console.log(count010 + " nota(s) de R$ 10,00");
  resto = resto % 10;
  
  if(resto >= 0 || resto >= 5){
    quociente = parseInt(resto / 5);
    count005 = quociente;
    console.log(count005 + " nota(s) de R$ 5,00");
    resto = resto % 5;
    
    if(resto >= 0 || resto >= 2){
      quociente = parseInt(resto / 2);
      count002 = quociente;
      console.log(count002 + " nota(s) de R$ 2,00");
      resto = resto % 2;
      
      if(resto >= 0 || resto >= 1){
        quociente = parseInt(resto / 1);
        count001 = quociente;
        console.log(count001 + " nota(s) de R$ 1,00");
        resto = resto % 1;
      }
    }
  }
}

else if(valor >= 5){
  quociente = parseInt(resto / 5);
  count005 = quociente;
  console.log(count100 + " nota(s) de R$ 100,00");
  console.log(count050 + " nota(s) de R$ 50,00");
  console.log(count020 + " nota(s) de R$ 20,00");
  console.log(count010 + " nota(s) de R$ 10,00");
  console.log(count005 + " nota(s) de R$ 5,00");
  resto = resto % 5;

  
  if(resto >= 0 || resto >= 2){
    quociente = parseInt(resto / 2);
    count002 = quociente;
    console.log(count002 + " nota(s) de R$ 2,00");
    resto = resto % 2;
    
    if(resto >= 0 || resto >= 1){
      quociente = parseInt(resto / 1);
      count001 = quociente;
      console.log(count001 + " nota(s) de R$ 1,00");
      resto = resto % 1;
    }
  }
}

else if(valor >= 2){
  quociente = parseInt(resto / 2);
  count002 = quociente;
  console.log(count100 + " nota(s) de R$ 100,00");
  console.log(count050 + " nota(s) de R$ 50,00");
  console.log(count020 + " nota(s) de R$ 20,00");
  console.log(count010 + " nota(s) de R$ 10,00");
  console.log(count005 + " nota(s) de R$ 5,00");
  console.log(count002 + " nota(s) de R$ 2,00");
  resto = resto % 2;
  
  if(resto >= 0 || resto >= 1){
    quociente = parseInt(resto / 1);
    count001 = quociente;
    console.log(count001 + " nota(s) de R$ 1,00");
    resto = resto % 1;
  }
}

else if(valor >= 1){
  quociente = parseInt(resto / 1);
  count001 = quociente;
  console.log(count100 + " nota(s) de R$ 100,00");
  console.log(count050 + " nota(s) de R$ 50,00");
  console.log(count020 + " nota(s) de R$ 20,00");
  console.log(count010 + " nota(s) de R$ 10,00");
  console.log(count005 + " nota(s) de R$ 5,00");
  console.log(count002 + " nota(s) de R$ 2,00");
  console.log(count001 + " nota(s) de R$ 1,00");
  resto = resto % 1;
}