import { v4 } from 'uuid'
import type { NewVehicleDto } from '../../presentation/dtos/new-vehicle.dto'
import { Vehicle } from '../entities/vehicle.entity'
import type { VehicleSwapi } from '../repositories/swapi.repository'

export class VehicleFactory {
	static buildFromSwapi(vehicleSwapi: VehicleSwapi): Vehicle {
		return new Vehicle({
			id: vehicleSwapi.id,
			nombre: vehicleSwapi.name,
			modelo: vehicleSwapi.model,
			fabricante: vehicleSwapi.manufacturer,
			costoEnCreditos: vehicleSwapi.cost_in_credits,
			longitud: vehicleSwapi.length,
			velocidadAtfmosfericaMax: vehicleSwapi.max_atmosphering_speed,
			tripulacion: vehicleSwapi.crew,
			pasajeros: vehicleSwapi.passengers,
			capacidadCarga: vehicleSwapi.cargo_capacity,
			consumibles: vehicleSwapi.consumables,
			claseVehiculo: vehicleSwapi.vehicle_class,
			pilotos: vehicleSwapi.pilots,
			peliculas: vehicleSwapi.films,
			url: vehicleSwapi.url,
			creado: vehicleSwapi.created,
			editado: vehicleSwapi.edited,
		})
	}

	static buildFromDto(dto: NewVehicleDto): Vehicle {
		return new Vehicle({
			id: v4(),
			...dto,
			creado: new Date().toISOString(),
			editado: new Date().toISOString(),
		})
	}
}
