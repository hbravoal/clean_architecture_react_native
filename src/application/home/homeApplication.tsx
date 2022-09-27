import {container, inject, injectable} from 'tsyringe';
import 'reflect-metadata';
import requestHome from '../../domain/home/model/requestHome';
import IHomeApplication from '../../domain/interfaces/application/iHomeApplication';
import ResponseHome from '../../domain/home/model/responseHome';
import {IHomeInfrastructure} from '../../domain/interfaces/infrastructure/iHomeInfrastructure';
import Card from 'domain/home/model/card';
import {TResponse} from 'domain/home/model/tResponse';
import {IHomeInfrastructureType} from 'domain/types/IHomeType';
//@injectable()
export default class HomeApplication implements IHomeApplication {
  private readonly _infrastructure: IHomeInfrastructure;

  //constructor(@inject("IHomeInfrastructure") infrastructure: IHomeInfrastructure) {
  constructor() {
    //this._infrastructure = infrastructure;
    //console.log(infrastructure);

    this._infrastructure = container.resolve<IHomeInfrastructure>(
      'IHomeInfrastructure',
    );
  }

  public async handler(request: requestHome): Promise<TResponse<Card[]>> {
    try {
      return await this._infrastructure.getHomeServer(request);
    } catch (ex: any) {
      const errorResponse = new TResponse<Card[]>(undefined, false, ex.message);
      return await Promise.resolve(errorResponse);
    }
  }
}
