import type { NewVehicleDto } from '../../src/vehicle/presentation/dtos/new-vehicle.dto'

export class NewVehicleDtoMock implements NewVehicleDto {
	nombre = 'tnombreest dto'
	modelo = 'modelo dto'
	fabricante = 'fabricante'
	costoEnCreditos = '150000'
	longitud = '368'
	velocidadAtfmosfericaMax = '30'
	tripulacion = '34'
	pasajeros = '21'
	capacidadCarga = '45000'
	consumibles = '2 months'
	claseVehiculo = 'wheeled'
	pilotos: string[] = []
	peliculas: string[] = []
	url = 'https://swapi.py4e.com/api/vehicles/8/'
	creado = '2024-11-09T21:56:00.308Z'
	editado = '2024-11-09T21:56:00.308Z'
}
