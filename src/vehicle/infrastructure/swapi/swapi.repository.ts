import axios from 'axios'
import type {
	SwapiRepository,
	VehicleSwapi,
} from '../../domain/repositories/swapi.repository'

export class SwapiRepositoryAPI implements SwapiRepository {
	private url: string
	constructor() {
		this.url = 'https://swapi.py4e.com/api'
	}

	async findOneVehicle(id: string): Promise<VehicleSwapi | null> {
		try {
			const route = `${this.url}/vehicles/${id}`

			const { data } = await axios.get(route)

			return {
				...data,
				id,
			}
		} catch (e) {
			if (e?.response && e?.response.status === 404) {
				return null
			}

			throw e
		}
	}
}
