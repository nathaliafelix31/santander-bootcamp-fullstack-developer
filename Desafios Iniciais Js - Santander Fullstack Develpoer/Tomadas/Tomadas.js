// A função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar
let lines = gets().split("\n");


let line = lines.shift().split(' ');


let tomadas = 0;

for ( i = 1; i < 5; i++ ) {
  tomadas = tomadas + parseInt(line.slice(-i));
}

tomadas = tomadas - 3;

console.log(tomadas);