import { Vehicle } from '../../../domain/entities/vehicle.entity'
import type { VehicleRepository } from '../../../domain/repositories/vehicle.repository'
import { VehicleModel } from '../model/vehicle.model'

export class VehicleRepositoryDynamoDB implements VehicleRepository {
	async findAll(): Promise<Vehicle[]> {
		const vehiclesModel = await VehicleModel.scan().exec()

		return vehiclesModel.map((v) => this.modelToDomain(v))
	}

	async findOne(id: string): Promise<Vehicle | null> {
		const vehicleModel = await VehicleModel.get(id)

		return vehicleModel ? this.modelToDomain(vehicleModel) : null
	}

	async save(vehicle: Vehicle): Promise<void> {
		await VehicleModel.create(vehicle)
	}

	private modelToDomain(model: any): Vehicle {
		return new Vehicle(model)
	}
}
