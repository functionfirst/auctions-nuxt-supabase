import { Store } from 'vuex'
import { IAuthData, IProfileData } from '@/src/entities'

export interface IRootState {
  version: number
}

export interface IState extends IRootState {
  session: IAuthData | null,
  profile: IProfileData | null
}

export type IStore = Store<IState>
