import { Controle } from './control';

let controle = new Controle();

controle.setVelocidadePermitida(120); // define a velocidade permitida

controle.incrementarVelocidade(10); // incrementa a velocidade em 10
console.log(controle.getVelocidade()); // printa a velocidade atual

controle.incrementarVelocidade(20); // incrementa a velocidade em 20
console.log(controle.getVelocidade()); // printa a velocidade atual

try {
  controle.incrementarVelocidade(100); // incrementa a velocidade em 100, estourando o limite permitido
} catch (error) {
  console.error(error); // printa o erro
}