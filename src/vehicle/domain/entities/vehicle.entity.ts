export type VehicleEssentialProperties = Readonly<
	Required<{
		id: string
		nombre: string
		modelo: string
		fabricante: string
		costoEnCreditos: string
		longitud: string
		velocidadAtfmosfericaMax: string
		tripulacion: string
		pasajeros: string
		capacidadCarga: string
		consumibles: string
		claseVehiculo: string
		pilotos: string[]
		peliculas: string[]
		url: string
	}>
>

export type VehicleOptionalProperties = Readonly<
	Partial<{
		creado: string
		editado: string
	}>
>

export type VehicleProperties = VehicleEssentialProperties &
	Required<VehicleOptionalProperties>

export class Vehicle {
	id: string
	nombre: string
	modelo: string
	fabricante: string
	costoEnCreditos: string
	longitud: string
	velocidadAtfmosfericaMax: string
	tripulacion: string
	pasajeros: string
	capacidadCarga: string
	consumibles: string
	claseVehiculo: string
	pilotos: string[]
	peliculas: string[]
	url: string
	creado: string
	editado: string
	constructor(properties: VehicleProperties) {
		Object.assign(this, properties)
	}
}
