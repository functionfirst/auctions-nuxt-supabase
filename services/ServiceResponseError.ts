import ServiceResponse from './ServiceResponse'

interface ServiceResponseError {
  error: string
}

class ServiceResponseError extends ServiceResponse {
  constructor(error: string) {
    super({ error })
  }
}

export default ServiceResponseError
