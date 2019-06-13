const persona = ['Daniel', 29, 'Mexico'];
const [nombre, , pais, profesion= 'No especificado']= persona;

const mostrarInfo=(nombre)=>{
    console.log(nombre);
}
mostrarInfo(nombre);