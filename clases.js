class Usuario{
    constructor(nombre, edad, correo){
        this.nombre=nombre;
        this.edad=edad;
        this.correo=correo;
    }
    mostrarSaludo(mensaje){
        return mensaje;
    }
    mostrarInfo(){
        return `
            <b>Nombre:</b> ${this.nombre} <br/>
            <b>Edad:</b> ${this.edad} <br/>
            <b>Correo:</b> ${this.correo} <br/>
            <hr/>

        `;
    }
}
const daniel = new Usuario('Daniel Cornelio', 29, 'correo@correo.com');
document.write(daniel.mostrarInfo());

class Estudiante extends Usuario{
    constructor (nombre, edad, correo,carrera){
        super(nombre, edad, correo);
        this.carrera=carrera;
    }
    mostrarInfo(){
        return `
            <b>Nombre:</b> ${this.nombre} <br/>
            <b>Edad:</b> ${this.edad} <br/>
            <b>Correo:</b> ${this.correo} <br/>
            <b>Carrera:</b> ${this.carrera} <br/>
            <hr/>

        `;
    }
}

const jose = new Estudiante('jose', 30, 'ejemplo@correo.com', 'Developer');
document.write(jose.mostrarInfo());