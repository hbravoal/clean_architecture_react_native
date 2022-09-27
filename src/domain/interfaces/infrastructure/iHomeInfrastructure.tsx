import RequestHome from '../../home/model/requestHome';
import {TResponse} from 'domain/home/model/tResponse';
import Card from 'domain/home/model/card';
export interface IHomeInfrastructure {
  getHomeServer: (request: RequestHome) => Promise<TResponse<Card[]>>;
}
