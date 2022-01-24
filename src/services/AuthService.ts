import ServiceResponseError from './ServiceResponseError'
import ServiceResponseSuccess from './ServiceResponseSuccess'
import { SupabaseClient } from '@supabase/supabase-js'

interface AuthService {
  service: SupabaseClient
}

interface UserAttributes {
  accessToken?: string
  email?: string
  confirmPassword?: string
  password?: string
  user?: object
}

class AuthService {
  constructor(service: SupabaseClient) {
    this.service = service
  }

  async resetPasswordForEmail(email: string) {
    const { error } = await this.service.auth.api.resetPasswordForEmail(email)

    if (error) {
      return new ServiceResponseError(error.message)
    }

    return new ServiceResponseSuccess('We have emailed you a link to reset your account password')
  }

  async signout() {
    const { error } = await this.service.auth.signOut()

    if (error) {
      return new ServiceResponseError(error.message)
    }

    return new ServiceResponseSuccess('You have successfully signed out')
  }

  async signup(credentials: UserAttributes) {
    const { confirmPassword, password } = credentials
    const passwordMismatch = confirmPassword !== password

    if (passwordMismatch) {
      return new ServiceResponseError('Please ensure your passwords match')
    }

    const { error, user } = await this.service.auth.signUp(credentials)

    if (error) {
      return new ServiceResponseError(error.message)
    }

    const confirmationSent = user && Object.prototype.hasOwnProperty.call(user, 'confirmation_sent_at')

    if (confirmationSent) {
      return new ServiceResponseError('Check your email for the confirmation link')
    }

    return new ServiceResponseSuccess('Your account has been created. A confirmation link has been emailed to you')
  }

  async signin(credentials: UserAttributes) {
    const { error } = await this.service.auth.signIn(credentials)

    if (error) {
      return new ServiceResponseError(error.message)
    }

    return new ServiceResponseSuccess('Signin successful')
  }

  async updateUserWithToken(jwt: string, user: UserAttributes) {
    const { error } = await this.service.auth.api.updateUser(jwt, user)

    if (error) {
      return new ServiceResponseError(error.message)
    }

    return new ServiceResponseSuccess('Your account has been updated successfully')
  }

  async updatePassword({ confirmPassword, password }: UserAttributes) {
    const passwordMismatch = confirmPassword !== password

    if (passwordMismatch) {
      return new ServiceResponseError('Please ensure your passwords match')
    }

    const { error } = await this.service.auth.update({ password })

    if (error) {
      return new ServiceResponseError(error.message)
    }

    return new ServiceResponseSuccess('Your password has been updated sucessfully')
  }

  async updateUser(attributes: UserAttributes) {
    const { error } = await this.service.auth.update(attributes)

    if (error) {
      return new ServiceResponseError(error.message)
    }

    return new ServiceResponseSuccess('Your account has been updated successfully')
  }
}

export default AuthService
