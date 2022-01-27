import { IWatchlist } from '@/src/entities'
import { IServiceResponse } from '@/src/services'

export interface IWatchlistService {
  toggle (auctionId: number, uid: string, create: boolean): IServiceResponse<IWatchlist|undefined>
  getById (auctionId: number, uid: string): IServiceResponse<IWatchlist>
}
