import { IProfile, IProfileData } from '@/src/entities'
import { IServiceResponse } from '@/src/services'

export interface IProfileService {
  get(userId: string): IServiceResponse<IProfile>
  update(payload: IProfileData): IServiceResponse<IProfile>
  updateMinimal(payload: IProfileData): IServiceResponse<void>
}
