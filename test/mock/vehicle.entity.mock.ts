import type { Vehicle } from '../../src/vehicle/domain/entities/vehicle.entity'

export class VehicleMock implements Vehicle {
	id = '90a6018a-b6e1-4aea-bd58-0e77a282f719'
	nombre = 'tnombreest'
	modelo = 'modelo'
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
