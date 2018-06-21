import Usuario from '../usuarios/index.js';
import $ from "jquery";

let usuario = new Usuario('Diego', 35);

console.log(usuario);

//let number = 3

//console.log(number);

//console.log(document.querySelector('.page-header > h1').innerHTML);

console.log($('.page-header > h1').html());
