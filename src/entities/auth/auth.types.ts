import { Session, User } from '@supabase/supabase-js'

export interface IUser {
  id: string
}

export interface IAuthData {
  readonly email: string
  readonly confirmPassword?: string
  readonly password: string
  readonly confirmation_sent_at?: string
}

export interface IAuth extends IAuthData {
  readonly accessToken?: string
  readonly user?: IUser
}

export interface IAuthSession extends Session {}

export interface IAuthUser extends User {}
