import ServiceResponse from './ServiceResponse'

interface ServiceResponseError {
  message: string
}

class ServiceResponseError extends ServiceResponse {
  constructor(message: string) {
    const error = true
    super({ error, message})
  }
}

export default ServiceResponseError
