import RequestHome from 'domain/home/model/requestHome';
import BaseAPI from 'infrastructure/BaseAPI';
import ResponseHome from '../../../domain/home/model/responseHome';
import {IHomeInfrastructure} from '../../../domain/interfaces/infrastructure/iHomeInfrastructure';
import Card from '../../../domain/home/model/card';

export default class HomeInfrastructure
  extends BaseAPI
  implements IHomeInfrastructure
{
  public async getHomeServer(request: RequestHome): Promise<ResponseHome> {
    request.customer = '1';

    const responseServer = await this.get(
      'https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=Magician',
    );
    const cards = responseServer.data;

    const response: Card[] = [];
    for (const cardItem of cards.data) {
      const item: Card = new Card();
      item.name = cardItem.name;
      item.type = cardItem.type;
      item.attribute = cardItem.attribute;
      response.push(item);
    }

    return {count: response.length, cards: response, error: ''};
  }
}
