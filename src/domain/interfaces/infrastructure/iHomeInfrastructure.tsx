import RequestHome from '../../home/model/requestHome'
import ResponseHome from '../../home/model/responseHome'

export interface IHomeInfrastructure {
  getHomeServer: (request: RequestHome) => Promise<ResponseHome>
}
