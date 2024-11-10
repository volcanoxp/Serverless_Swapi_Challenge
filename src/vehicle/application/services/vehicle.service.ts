import type { Vehicle } from '../../domain/entities/vehicle.entity'
import { VehicleFactory } from '../../domain/factories/vehicle.factory'
import type { SwapiRepository } from '../../domain/repositories/swapi.repository'
import type { VehicleRepository } from '../../domain/repositories/vehicle.repository'
import type { NewVehicleDto } from '../../presentation/dtos/new-vehicle.dto'
import { VehicleNotFound } from '../errors/VehicleNotFoundError'

export class VehicleService {
	constructor(
		private readonly vehicleRepository: VehicleRepository,
		private readonly swapiRepository: SwapiRepository,
	) {}

	async findOne(id: string): Promise<Vehicle> {
		const vehicle = await this.vehicleRepository.findOne(id)

		if (!vehicle) {
			const vehicleSwapi = await this.swapiRepository.findOneVehicle(id)

			if (!vehicleSwapi) throw new VehicleNotFound()

			const vehicle = VehicleFactory.buildFromSwapi(vehicleSwapi)

			await this.vehicleRepository.save(vehicle)

			return vehicle
		}

		return vehicle
	}

	async create(data: NewVehicleDto): Promise<Vehicle> {
		const vehicle = VehicleFactory.buildFromDto(data)

		await this.vehicleRepository.save(vehicle)

		return vehicle
	}

	async findAll(): Promise<Vehicle[]> {
		const vehicles = await this.vehicleRepository.findAll()

		return vehicles
	}
}
