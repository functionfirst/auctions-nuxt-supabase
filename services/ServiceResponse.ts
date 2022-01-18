interface ServiceResponse {
  data?: object[] | string[]
  error?: string
  message?: string
}

class ServiceResponse {
  constructor({ data = [], error, message } : ServiceResponse) {
    this.data = data
    this.error = error
    this.message = message
  }
}

export default ServiceResponse
