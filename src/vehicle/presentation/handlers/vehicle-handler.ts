import { VehicleService } from '../../application/services/vehicle.service'
import { VehicleRepositoryDynamoDB } from '../../infrastructure/dynamo-db/repositories/vehicle.repository'
import { SwapiRepositoryAPI } from '../../infrastructure/swapi/swapi.repository'
import { VehicleController } from '../controllers/vehicle.controller'

const vehicleRepository = new VehicleRepositoryDynamoDB()
const swapiRepository = new SwapiRepositoryAPI()
const vehicleService = new VehicleService(vehicleRepository, swapiRepository)
const vehicleController = new VehicleController(vehicleService)

export const findOne = vehicleController.findOne;
export const save = vehicleController.save;
export const findAll = vehicleController.findAll;
