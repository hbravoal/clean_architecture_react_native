import RequestHome from '../../home/model/requestHome'
import ResponseHome from '../../home/model/responseHome'

export default interface IHomeApplication {
  handler: (request: RequestHome) => Promise<ResponseHome>
}
