import { IWatchlistService, IAuctionService, IAuthService, IProfileService } from '@/src/services'

export interface IProvider {
  auction: IAuctionService
  auth: IAuthService
  profile: IProfileService,
  watchlist: IWatchlistService
}
