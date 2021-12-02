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
/**
 * TODO's:
 * -Crear base de datos
 * -Crear tablas
 * -Modificar tablas
 * -Crear relaciones
 * -Crear transacciones
 */

//  Crear Base de Datos
let db = new sqlite3.Database('./db/comala_sqlite.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the chinook database.');
});

//  Crear Tablas
/**
CREATE TABLE [IF NOT EXISTS] [schema_name].table_name (
	column_1 data_type PRIMARY KEY,
   	column_2 data_type NOT NULL,
	column_3 data_type DEFAULT 0,
	table_constraints
) [WITHOUT ROWID];
 */
//formato para fecha_nacimiento YYYY-MM-DD
let sqlCrearTablaPersona = 
`CREATE TABLE [IF NOT EXIST] persona
(
    curp TEXT PRIMARY KEY,
    nombres TEXT NOT NULL,
    apellido_paterno TEXT NOT NULL,
    apellido_materno TEXT NOT NULL,
    fecha_nacimiento TEXT NOT NULL,
    telefono TEXT UNIQUE,
    email TEXT UNIQUE,
    red_social TEXT UNIQUE
) [WITHOUT ROWID];
`;

let sqlCrearTabla

//  Crear Relaciones

//  Modificar tablas

//  Crear Transacciones

console.log( (new PersonaAlAzar()).getPersonaTexto() );
console.log( (new PersonaAlAzar()).getPersonaTexto() );
console.log( (new PersonaAlAzar()).getPersonaTexto() );
console.log( (new PersonaAlAzar()).getPersonaTexto() );
