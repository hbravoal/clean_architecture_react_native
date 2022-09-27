import {TResponse} from '../model/tResponse';
import Card from '../model/card';
export const HomeState = {
  data: new TResponse<Card[]>(),
  loading: false,
};

export default HomeState;
