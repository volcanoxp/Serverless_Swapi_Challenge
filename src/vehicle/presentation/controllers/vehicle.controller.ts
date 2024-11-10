import type { APIGatewayProxyEventV2, Handler } from 'aws-lambda'
import { ZodError } from 'zod'
import {
	BadRequest,
	InternalServerError,
	NotFoundRequest,
	SuccessRequest,
} from '../../../shared/responses'
import { VehicleNotFound } from '../../application/errors/VehicleNotFoundError'
import type { VehicleService } from '../../application/services/vehicle.service'
import { type NewVehicleDto, newVehicleSchema } from '../dtos/new-vehicle.dto'

export class VehicleController {
	constructor(private readonly vehicleService: VehicleService) {}

	findOne: Handler<APIGatewayProxyEventV2> = async (event) => {
		try {
			const { id } = event.pathParameters

			const vehicle = await this.vehicleService.findOne(id)

			return new SuccessRequest(vehicle)
		} catch (e) {
			if (e instanceof VehicleNotFound) {
				return new NotFoundRequest(e)
			}
			return new InternalServerError()
		}
	}

	save: Handler<APIGatewayProxyEventV2> = async (event) => {
		try {
			const newVehicleDto = newVehicleSchema.parse(
				JSON.parse(event.body),
			) as NewVehicleDto

			const vehicle = await this.vehicleService.create(newVehicleDto)

			return new SuccessRequest(vehicle)
		} catch (e) {
			if (e instanceof ZodError) {
				return new BadRequest(e.format())
			}
			return new InternalServerError()
		}
	}

	findAll: Handler<APIGatewayProxyEventV2> = async (_event) => {
		try {
			const vehicles = await this.vehicleService.findAll()

			return new SuccessRequest(vehicles)
		} catch (e) {
			return new InternalServerError()
		}
	}
}
