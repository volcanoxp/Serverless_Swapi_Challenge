import {
	BadRequest,
	InternalServerError,
	NotFoundRequest,
	SuccessRequest,
} from '../../../../src/shared/responses'
import { VehicleNotFound } from '../../../../src/vehicle/application/errors/VehicleNotFoundError'
import { VehicleService } from '../../../../src/vehicle/application/services/vehicle.service'
import { VehicleRepositoryDynamoDB } from '../../../../src/vehicle/infrastructure/dynamo-db/repositories/vehicle.repository'
import { SwapiRepositoryAPI } from '../../../../src/vehicle/infrastructure/swapi/swapi.repository'
import { VehicleController } from '../../../../src/vehicle/presentation/controllers/vehicle.controller'
import { NewVehicleDtoMock } from '../../../mock/new-vehicle.dto.mock'
import { VehicleMock } from '../../../mock/vehicle.entity.mock'

jest.mock('dynamoose')
jest.mock(
	'../../../../src/vehicle/infrastructure/dynamo-db/repositories/vehicle.repository',
)
jest.mock('../../../../src/vehicle/infrastructure/swapi/swapi.repository')
jest.mock('../../../../src/vehicle/application/services/vehicle.service')

describe('VehicleController', () => {
	let vehicleService: VehicleService
	let vehicleController: VehicleController

	beforeEach(() => {
		const vehicleRepository = new VehicleRepositoryDynamoDB()
		const swapiRepository = new SwapiRepositoryAPI()
		vehicleService = new VehicleService(vehicleRepository, swapiRepository)
		vehicleController = new VehicleController(vehicleService)
		jest.clearAllMocks()
	})

	describe('findOne', () => {
		it('Should return SuccessRequest when exits vehicle', async () => {
			const vehicleMock = new VehicleMock()

			jest.spyOn(vehicleService, 'findOne').mockResolvedValue(vehicleMock)

			const resp = await vehicleController.findOne(
				{ pathParameters: { id: '2' } } as any,
				{} as any,
				{} as any,
			)

			expect(resp).toBeInstanceOf(SuccessRequest)
		})

		it('Should return NotFoundRequest when no exits vehicle', async () => {
			jest
				.spyOn(vehicleService, 'findOne')
				.mockRejectedValue(new VehicleNotFound())

			const resp = await vehicleController.findOne(
				{ pathParameters: { id: '2' } } as any,
				{} as any,
				{} as any,
			)

			expect(resp).toBeInstanceOf(NotFoundRequest)
		})

		it('Should return InternalServerError when fail vehicle service', async () => {
			jest
				.spyOn(vehicleService, 'findOne')
				.mockRejectedValue(new Error('error'))

			const resp = await vehicleController.findOne(
				{ pathParameters: { id: '2' } } as any,
				{} as any,
				{} as any,
			)

			expect(resp).toBeInstanceOf(InternalServerError)
		})
	})

	describe('save', () => {
		it('Should return SuccessRequest when save successfully', async () => {
			const newVehicleDto = new NewVehicleDtoMock()

			const resp = await vehicleController.save(
				{ body: JSON.stringify(newVehicleDto) } as any,
				{} as any,
				{} as any,
			)

			expect(resp).toBeInstanceOf(SuccessRequest)
		})

		it('Should return BadRequest when send invalid params', async () => {
			const newVehicleDto = new NewVehicleDtoMock()
			newVehicleDto.url = 'dasdadsda'

			const resp = await vehicleController.save(
				{ body: JSON.stringify(newVehicleDto) } as any,
				{} as any,
				{} as any,
			)

			expect(resp).toBeInstanceOf(BadRequest)
		})

		it('Should return InternalServerError when fail vehicle service', async () => {
			const newVehicleDto = new NewVehicleDtoMock()

			jest.spyOn(vehicleService, 'create').mockRejectedValue(new Error('error'))

			const resp = await vehicleController.save(
				{ body: JSON.stringify(newVehicleDto) } as any,
				{} as any,
				{} as any,
			)

			expect(resp).toBeInstanceOf(InternalServerError)
		})
	})

	describe('findAll', () => {
		it('Should return SuccessRequest when get data successfully', async () => {
			const resp = await vehicleController.findAll(
				{} as any,
				{} as any,
				{} as any,
			)

			expect(resp).toBeInstanceOf(SuccessRequest)
		})

		it('Should return InternalServerError when fail vehicle service', async () => {
			jest
				.spyOn(vehicleService, 'findAll')
				.mockRejectedValue(new Error('error'))

			const resp = await vehicleController.findAll(
				{} as any,
				{} as any,
				{} as any,
			)

			expect(resp).toBeInstanceOf(InternalServerError)
		})
	})
})
