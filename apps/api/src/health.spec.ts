import {HealthController} from './health';
describe('HealthController',()=>{
 it('reports the API as live',()=>{const controller=new HealthController({} as never);expect(controller.live()).toEqual({status:'ok'})});
});
