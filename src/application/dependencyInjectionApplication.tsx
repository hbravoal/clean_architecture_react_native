import { container } from 'tsyringe'
import HomeApplication from './home/homeApplication'

export const DependencyInjectionApplication = (): void => {
  container.register('IHomeApplication', {
    useClass: HomeApplication
  })
}
export default DependencyInjectionApplication
