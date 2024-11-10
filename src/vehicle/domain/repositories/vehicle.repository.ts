import type { Vehicle } from '../entities/vehicle.entity'

export interface VehicleRepository {
	findAll(): Promise<Vehicle[]>
	findOne(id: string): Promise<Vehicle | null>
	save(vehicle: Vehicle): Promise<void>
}
