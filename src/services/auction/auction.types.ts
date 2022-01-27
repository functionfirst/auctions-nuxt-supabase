import { IAuction, IAuctionData } from '@/src/entities'
import { IServiceResponse } from '@/src/services'

export interface IAuctionService {
  create(payload: IAuctionData): IServiceResponse<IAuction>
  update(id: number, payload: IAuctionData): IServiceResponse<IAuction>
  delete(id: number): IServiceResponse<boolean>
  findAll(): IServiceResponse<IAuction[]>
  findById(id: number): IServiceResponse<IAuction>
  discover(): IServiceResponse<IAuction[]>
  upcoming(): IServiceResponse<IAuction[]>
}
