import Dynamoose from 'dynamoose'
import { v4 } from 'uuid'

const vehicleSchema = new Dynamoose.Schema({
	id: {
		type: String,
		default: v4(),
	},
	nombre: String,
	modelo: String,
	fabricante: String,
	costoEnCreditos: String,
	longitud: String,
	velocidadAtfmosfericaMax: String,
	tripulacion: String,
	pasajeros: String,
	capacidadCarga: String,
	consumibles: String,
	claseVehiculo: String,
	pilotos: {
		type: Array,
		schema: [String],
		default: [],
	},
	peliculas: {
		type: Array,
		schema: [String],
		default: [],
	},
	creado: {
		type: String,
		default: new Date().toISOString(),
	},
	editado: {
		type: String,
		default: new Date().toISOString(),
	},
	url: {
		type: String,
		default: '',
	},
})

export const VehicleModel = Dynamoose.model('Vehicle', vehicleSchema)

new Dynamoose.Table('VehicleTable', [VehicleModel], { initialize: true })
