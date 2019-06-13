const usuario = {
    nombre: 'Daniel',
    correo: 'daniel@gmail.com',
    edad: 29,
    pais: 'Mexico',
    profesion: 'Developer'
}

const {nombre, correo}=usuario;

const mostrarInfo=({nombre, profesion})=>{
    console.log(`${nombre} es ${profesion}`);

}
mostrarInfo(usuario);