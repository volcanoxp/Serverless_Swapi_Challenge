export type VehicleSwapi = Readonly<
	Required<{
		id: string
		name: string
		model: string
		manufacturer: string
		cost_in_credits: string
		length: string
		max_atmosphering_speed: string
		crew: string
		passengers: string
		cargo_capacity: string
		consumables: string
		vehicle_class: string
		pilots: string[]
		films: string[]
		url: string
		created: string
		edited: string
	}>
>

export interface SwapiRepository {
	findOneVehicle(id: string): Promise<VehicleSwapi | null>
}
