import { VehicleNotFound } from '../../../../src/vehicle/application/errors/VehicleNotFoundError'
import { VehicleService } from '../../../../src/vehicle/application/services/vehicle.service'
import { VehicleRepositoryDynamoDB } from '../../../../src/vehicle/infrastructure/dynamo-db/repositories/vehicle.repository'
import { SwapiRepositoryAPI } from '../../../../src/vehicle/infrastructure/swapi/swapi.repository'
import { NewVehicleDtoMock } from '../../../mock/new-vehicle.dto.mock'
import { VehicleSwapiMock } from '../../../mock/vehicle-swapi.mock'
import { VehicleMock } from '../../../mock/vehicle.entity.mock'

jest.mock('dynamoose')
jest.mock(
	'../../../../src/vehicle/infrastructure/dynamo-db/repositories/vehicle.repository',
)
jest.mock('../../../../src/vehicle/infrastructure/swapi/swapi.repository')

describe('VehicleService', () => {
	let vehicleRepository: VehicleRepositoryDynamoDB
	let swapiRepository: SwapiRepositoryAPI
	let vehicleService: VehicleService

	beforeEach(() => {
		vehicleRepository = new VehicleRepositoryDynamoDB()
		swapiRepository = new SwapiRepositoryAPI()
		vehicleService = new VehicleService(vehicleRepository, swapiRepository)
		jest.clearAllMocks()
	})

	describe('findOne', () => {
		it('Should return Vehicle when find in DB', async () => {
			const vehicleMock = new VehicleMock()
			jest.spyOn(vehicleRepository, 'findOne').mockResolvedValue(vehicleMock)

			const result = await vehicleService.findOne('322')

			expect(result).toBe(vehicleMock)
			expect(swapiRepository.findOneVehicle).toHaveBeenCalledTimes(0)
		})

		it('Should throw VehicleNotFound when not find in SWAPI API', async () => {
			jest.spyOn(swapiRepository, 'findOneVehicle').mockResolvedValue(null)

			await expect(vehicleService.findOne('2')).rejects.toBeInstanceOf(
				VehicleNotFound,
			)
			expect(vehicleRepository.findOne).toHaveBeenCalled()
		})

		it('Should return Vehicle when find in SWAPI API', async () => {
			const vehicleSwapiMock = new VehicleSwapiMock()
			jest
				.spyOn(swapiRepository, 'findOneVehicle')
				.mockResolvedValue(vehicleSwapiMock)

			const result = await vehicleService.findOne('322')

			expect(vehicleRepository.findOne).toHaveBeenCalled()
			expect(vehicleRepository.save).toHaveBeenCalled()
			expect(result.id).toBe(vehicleSwapiMock.id)
		})
	})

	describe('create', () => {
		it('Should return Vehicle when save in DB', async () => {
			const newVehicleDto = new NewVehicleDtoMock()

			const result = await vehicleService.create(newVehicleDto)

			expect(vehicleRepository.save).toHaveBeenCalled()
			expect(result.id).toBeDefined()
			expect(result.nombre).toBe(newVehicleDto.nombre)
		})
	})

	describe('findAll', () => {
		it('Should return Vehicles when has data in DB', async () => {
			const vehiclesMock = [new VehicleMock()]

			jest.spyOn(vehicleRepository, 'findAll').mockResolvedValue(vehiclesMock)

			const result = await vehicleService.findAll()

			expect(result.length).toBe(vehiclesMock.length)
		})
	})
})
