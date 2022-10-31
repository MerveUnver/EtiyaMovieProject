import { ResultModel } from '../../models/resultModel';

export interface UserLoginResponse extends ResultModel {
  success: true,
  access_token: string,
  name:string,
  lastName:string,
  id:number,
  roleId:number
}
