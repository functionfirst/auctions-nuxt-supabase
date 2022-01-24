interface ServiceResponse {
  data?: object[] | string[]
  error?: boolean
  message: string
}

class ServiceResponse {
  constructor({
    data = [],
    error = false,
    message
  } : ServiceResponse) {
    this.data = data
    this.error = error
    this.message = message
  }
}

export default ServiceResponse
