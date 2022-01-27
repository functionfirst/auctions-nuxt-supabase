import { IAuthData, IAuthSession, IAuthUser } from '@/src/entities'
import { IServiceResponse } from '@/src/services'

export interface IAuthService {
  session(): IAuthSession
  user(): IAuthUser

  resetPasswordForEmail(email: string): IServiceResponse<void>
  signout(): IServiceResponse<void>
  signup(credentials: IAuthData): IServiceResponse<IAuthUser>
  signin(credentials: IAuthData): IServiceResponse<void>
  updateUserWithToken(jwt: string, credentials: IAuthData): IServiceResponse<void>
  updatePassword(credentials: IAuthData): IServiceResponse<void>
  updateUser(credentials: IAuthData): IServiceResponse<void>
}
