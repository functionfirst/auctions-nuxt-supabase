import { IProfile, IProfileData } from './profile.types'

export class Profile implements IProfile {
  readonly id?: number
  readonly name: string
  readonly createdAt?: Date | string
  readonly updatedAt?: Date | string

  constructor (data: IProfileData) {
    this.name = data.name

    if (data.id) {
      this.id = data.id
    }

    if (data.createdAt) {
      this.createdAt = data.createdAt
    }

    if (data.updatedAt) {
      this.updatedAt = data.updatedAt
    }
  }
}
