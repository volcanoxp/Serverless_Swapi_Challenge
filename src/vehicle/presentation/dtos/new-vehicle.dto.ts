import { z } from 'zod'

export const newVehicleSchema = z.object({
	nombre: z.string(),
	modelo: z.string(),
	fabricante: z.string(),
	costoEnCreditos: z.string(),
	longitud: z.string(),
	velocidadAtfmosfericaMax: z.string(),
	tripulacion: z.string(),
	pasajeros: z.string(),
	capacidadCarga: z.string(),
	consumibles: z.string(),
	claseVehiculo: z.string(),
	pilotos: z.string().url().array(),
	peliculas: z.string().url().array(),
	url: z.string().url(),
})

export type NewVehicleDto = Required<z.infer<typeof newVehicleSchema>>
