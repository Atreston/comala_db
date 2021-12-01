let faker = require('faker/locale/es_MX');
faker.locale = "es_MX";

//console.log(`${faker.name.firstName()} ${faker.name.middleName()} ${faker.name.lastName()} ${faker.name.lastName()}`);

class Fecha {
    constructor(dia = 1, mes = 1, año = 1970) {
        this.date = new Date(año, mes, dia);
    }
}

class PersonaAlAzar {
    constructor() {
        this.nombres = this.getNombres();
        this.apellidoMaterno = faker.name.lastName();
        this.apellidoPaterno = faker.name.lastName();
        this.fechaNacimiento = faker.date.past(60);
    }
    getNombres() {
        return faker.name.firstName();
    }
    getPersonaTexto() {
        return `Nombre: ${this.nombres} ${this.apellidoMaterno} ${this.apellidoPaterno}\nFecha de nacimiento: ${this.fechaNacimiento}\n`;
    }
}

console.log( (new PersonaAlAzar()).getPersonaTexto() );
console.log( (new PersonaAlAzar()).getPersonaTexto() );
console.log( (new PersonaAlAzar()).getPersonaTexto() );
console.log( (new PersonaAlAzar()).getPersonaTexto() );
