export interface IProfileData {
  readonly id?: number
  readonly name: string
  readonly createdAt?: Date | string
  readonly updatedAt?: Date | string
}

export interface IProfile extends IProfileData {

}
