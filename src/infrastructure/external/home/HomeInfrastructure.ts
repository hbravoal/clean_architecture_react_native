import RequestHome from '../../../domain/home/model/requestHome'
import ResponseHome from '../../../domain/home/model/responseHome'
import { IHomeInfrastructure } from '../../../domain/interfaces/infrastructure/iHomeInfrastructure'
import axios from 'axios'
import Card from '../../../domain/home/model/card'

export default class HomeInfrastructure implements IHomeInfrastructure {
  public async getHomeServer (request: RequestHome): Promise<ResponseHome> {
    request.customer = '1'

    const responseServer = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=Magician')
    const cards = responseServer.data

    const response: Card[] = []
    for (const cardItem of cards.data) {
      const item: Card = new Card()
      item.name = cardItem.name
      item.type = cardItem.type
      item.attribute = cardItem.attribute
      response.push(item)
    }

    return { count: response.length, cards: response, error: '' }
  }
}
