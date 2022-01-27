import { IAuthService } from './auth.types'
import { IAuthSession, IAuthData, IAuthUser } from '@/src/entities'
import { IServiceClient, IServiceAuthClient, IServiceResponse } from '@/src/services'

export class AuthService implements IAuthService {
  readonly auth: IServiceAuthClient

  constructor (service: IServiceClient) {
    this.auth = service.auth
  }

  async resetPasswordForEmail (email: string): IServiceResponse<void> {
    const { error } = await this.auth.api.resetPasswordForEmail(email)

    if (error) {
      return { error: error.message }
    }

    return { message: 'We have emailed you a link to reset your account password' }
  }

  async signout (): IServiceResponse<void> {
    const { error } = await this.auth.signOut()

    if (error) {
      return { error: error.message }
    }

    return { message: 'You have successfully signed out' }
  }

  user (): IAuthUser {
    return this.auth.user() as IAuthUser
  }

  session (): IAuthSession {
    return this.auth.session() as IAuthSession
  }

  async signup (credentials: IAuthData): IServiceResponse<IAuthUser> {
    const { confirmPassword, password } = credentials
    const passwordMismatch = confirmPassword !== password

    if (passwordMismatch) {
      return { error: 'Please ensure your passwords match' }
    }

    const { error, user } = await this.auth.signUp(credentials)

    if (error) {
      return { error: error.message }
    }

    const confirmationSent = user && Object.prototype.hasOwnProperty.call(user, 'confirmation_sent_at')

    if (confirmationSent) {
      return { error: 'Check your email for the confirmation link' }
    }

    const data = user as IAuthUser
    return { data, message: 'Your account has been created. A confirmation link has been emailed to you' }
  }

  async signin (credentials: IAuthData): IServiceResponse<void> {
    const { error } = await this.auth.signIn(credentials)

    if (error) {
      return { error: error.message }
    }

    return { message: 'Signin successful' }
  }

  async updateUserWithToken (jwt: string, credentials: IAuthData): IServiceResponse<void> {
    const { error } = await this.auth.api.updateUser(jwt, credentials)

    if (error) {
      return { error: error.message }
    }

    return { message: 'Your account has been updated successfully' }
  }

  async updatePassword (credentials: IAuthData): IServiceResponse<void> {
    const { confirmPassword, password } = credentials
    const passwordMismatch = confirmPassword !== password

    if (passwordMismatch) {
      return { error: 'Please ensure your passwords match' }
    }

    const { error } = await this.auth.update({ password })

    if (error) {
      return { error: error.message }
    }

    return { message: 'Your password has been updated sucessfully' }
  }

  async updateUser (credentials: IAuthData): IServiceResponse<void> {
    const { error } = await this.auth.update(credentials)

    if (error) {
      return { error: error.message }
    }

    return { message: 'Your account has been updated successfully' }
  }
}
