import type { VehicleSwapi } from '../../src/vehicle/domain/repositories/swapi.repository'

export class VehicleSwapiMock implements VehicleSwapi {
	id = '2'
	name = 'tnombreest'
	model = 'modelo'
	manufacturer = 'fabricante'
	cost_in_credits = '150000'
	length = '368'
	max_atmosphering_speed = '30'
	crew = '34'
	passengers = '21'
	cargo_capacity = '45000'
	consumables = '2 months'
	vehicle_class = 'wheeled'
	pilots: string[] = []
	films: string[] = []
	url = 'https://swapi.py4e.com/api/vehicles/8/'
	created = '2024-11-09T21:56:00.308Z'
	edited = '2024-11-09T21:56:00.308Z'
}
