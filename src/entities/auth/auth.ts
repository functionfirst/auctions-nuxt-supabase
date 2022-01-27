import { IAuth, IAuthData, IUser } from './auth.types'

export class Auth implements IAuth {
  readonly email: string
  readonly confirmPassword?: string
  readonly password: string
  readonly accessToken?: string
  readonly user?: IUser

  constructor (data: IAuthData) {
    this.email = data.email
    this.confirmPassword = data.confirmPassword
    this.password = data.password
  }
}
