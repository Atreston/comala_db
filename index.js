let faker = require('faker/locale/es_MX');
faker.locale = "es_MX";

//console.log(`${faker.name.firstName()} ${faker.name.middleName()} ${faker.name.lastName()} ${faker.name.lastName()}`);

class Fecha {
    constructor(dia = 1, mes = 1, año =) {
        this.date = new Date();
    }
}

function Persona() {
    this.nombres
    this.apellidoMaterno
    this.apellidoPaterno
    this.fechaNacimiento
}