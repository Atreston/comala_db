let faker = require('faker/locale/es_MX');
faker.locale = "es_MX";

class PersonaAlAzar {
    constructor() {
        this.nombres = this.getNombres();
        this.apellidoMaterno = faker.name.lastName();
        this.apellidoPaterno = faker.name.lastName();
        //formato actual para la fecha 1974-05-31T10:18:22.040Z
        //formato para fecha_nacimiento YYYY-MM-DD
        this.fechaNacimiento = faker.date.past(60);
    }
    getNombres() {
        return faker.name.firstName();
    }
    getPersonaTexto() {
        return `Nombre: ${this.nombres} ${this.apellidoMaterno} ${this.apellidoPaterno}\nFecha de nacimiento: ${this.fechaNacimiento.toLocaleDateString()}\n`;
    }
}

console.log( (new PersonaAlAzar()).getPersonaTexto() );
console.log( (new PersonaAlAzar()).getPersonaTexto() );
console.log( (new PersonaAlAzar()).getPersonaTexto() );
console.log( (new PersonaAlAzar()).getPersonaTexto() );
console.log(faker.name.firstName());
console.log(faker.name.gender());

console.log( faker.name.findName() );