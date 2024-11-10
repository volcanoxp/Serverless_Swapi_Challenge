export interface APIResponse {
	statusCode: number
	body: any
	headers: any
}

export class SuccessRequest implements APIResponse {
	statusCode: number
	body: any
	headers: any
	constructor(body: Object) {
		this.statusCode = 200
		this.body = JSON.stringify(body)
		this.headers = {
			'Content-Type': 'application/json',
		}
	}
}

export class BadRequest implements APIResponse {
	statusCode: number
	body: any
	headers: any
	constructor(body: Object) {
		this.statusCode = 400
		this.body = JSON.stringify(body)
		this.headers = {
			'Content-Type': 'application/json',
		}
	}
}

export class NotFoundRequest implements APIResponse {
	statusCode: number
	body: any
	headers: any
	constructor(body: Object) {
		this.statusCode = 404
		this.body = JSON.stringify(body)
		this.headers = {
			'Content-Type': 'application/json',
		}
	}
}

export class InternalServerError implements APIResponse {
	statusCode: number
	body: any
	headers: any
	constructor() {
		this.statusCode = 500
		this.body = JSON.stringify({
			message: 'Internal Server Error',
		})
		this.headers = {
			'Content-Type': 'application/json',
		}
	}
}
