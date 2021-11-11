import Auction from '@/entities/Auction'

function AuctionFactory (data) {
  if (Array.isArray(data)) {
    return data.map(auction => new Auction(auction))
  }

  return new Auction(data)
}

export default AuctionFactory
