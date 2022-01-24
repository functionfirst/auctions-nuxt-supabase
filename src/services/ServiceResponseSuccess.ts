import ServiceResponse from './ServiceResponse'

interface ServiceResponseSuccess {
  message: string
  data?: object[] | string[]
}

class ServiceResponseSuccess extends ServiceResponse {
  constructor (message: string, data: object[] | string[] = []) {
    super({ message, data })
  }
}

export default ServiceResponseSuccess
