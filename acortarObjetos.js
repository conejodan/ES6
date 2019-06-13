const crearObjetos = (nombre, edad) => {
    return {
        nombre,
        edad,
        mostrarInfo(){
            return `${nombre} tiene ${edad} años`;
        }
    }
}
console.log(crearObjetos('Daniel', 29).mostrarInfo());