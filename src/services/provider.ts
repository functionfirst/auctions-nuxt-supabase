import { IServiceClient, WatchlistService, ProfileService, AuthService, AuctionService, IProvider } from './'

export const provider = (service: IServiceClient): IProvider => ({
  auction: new AuctionService(service),
  auth: new AuthService(service),
  profile: new ProfileService(service),
  watchlist: new WatchlistService(service)
})
