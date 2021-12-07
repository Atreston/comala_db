let faker = require('faker/locale/es_MX');
let sqlite3 = require('sqlite3');
faker.locale = "es_MX";

//console.log(`${faker.name.firstName()} ${faker.name.middleName()} ${faker.name.lastName()} ${faker.name.lastName()}`);

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
/**
 * TODO's:
 * -Crear base de datos
 * -Crear tablas
 * -Modificar tablas
 * -Crear relaciones
 * -Crear transacciones
 */


/** Crear Base de Datos
 *  sqlite3.OPEN_READONLY   Modo lectura
 *  sqlite3.OPEN_READWRITE  Modo lectura-escritura
 *  sqlite3.OPEN_CREATE     Abrir la bd o crearla en caso de no existir
 */
let db = new sqlite3.Database('./db/comala_sqlite.db', sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the chinook database.');
});

/** Crear Tablas
CREATE TABLE [IF NOT EXISTS] [schema_name].table_name (
	column_1 data_type PRIMARY KEY,
   	column_2 data_type NOT NULL,
	column_3 data_type DEFAULT 0,
	table_constraints
) [WITHOUT ROWID];
 */

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



//  Crear Relaciones

//  Modificar tablas

//  Crear Transacciones
