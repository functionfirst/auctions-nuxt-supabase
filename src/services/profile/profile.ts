import { IProfile, IProfileData, Profile } from '../../entities'
import { IProfileService, IServiceClient, IServiceQueryBuilder, IServiceResponse, IServiceUpsertConstraint } from '@/src/services'

export class ProfileService implements IProfileService {
  readonly collection: IServiceQueryBuilder<any>

  constructor (service: IServiceClient) {
    this.collection = service.from('profiles')
  }

  async get (userId: string): IServiceResponse<IProfile> {
    const { data, error } = await this.collection.select('name').eq('id', userId).single()

    if (error) {
      return { error: error.message }
    }

    const profile = new Profile(data)

    return { data: profile }
  }

  async update (payload: IProfileData): IServiceResponse<IProfile> {
    const { data, error } = await this.collection.upsert(payload).single()

    if (error) {
      return { error: error.message }
    }

    const profileData = new Profile(data)
    return { data: profileData, message: 'Profile updated successfully' }
  }

  async updateMinimal (payload: IProfileData): IServiceResponse<void> {
    const constraints: IServiceUpsertConstraint = {
      returning: 'minimal' // Doesn't return the value after inserting
    }

    const { error } = await this.collection.upsert(payload, constraints)

    if (error) {
      return { error: error.message }
    }

    return { message: 'Profile updated successfully' }
  }
}
