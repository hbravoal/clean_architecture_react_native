import { container } from 'tsyringe';
import HomeInfrastructure from './external/home/HomeInfrastructure';

export const DependencyInjectionInfrastructure = (): void => {
    container.register('IHomeInfrastructure', {
        useClass: HomeInfrastructure
      })
}
export default DependencyInjectionInfrastructure;
