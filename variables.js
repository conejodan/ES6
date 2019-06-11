//Caracteristica #1
//Podemos re-declarar variables con var
//Esto puede causar problemas en donde redeclaramos sin darnos cuemta

// var nombre = 'Daniel';
// var nombre = 'jose';

// const pais = 'Mexico';
// const pais = 'España';
// console.log('Hola', pais);

//Caracteristica #2
//let y const tambien tienen un scope en el que no podemos acceder a las variables creadas dentro de la funcion

// function saludo(){
//     let nombre='Daniel';
//     return 'Hola '+ nombre;
// }
// console.log(saludo());

//Caracteristica #3
//let y const tienen un scope de tipo bloque
// let edad=18;
// if(edad>=18){
//     let esAdulto=true;
// }
// console.log(esAdulto);
//Caracteristica #4
// const nombre ='Daniel';
// nombre=jose;
// const colores= ['rojo','verde'];
// colores.push=('azul');
// console.log(colores);
