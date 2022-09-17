
import request from "./request";
import {api} from "./constants";

// export class AuthRequest {
//
// public loginUser = async (email: string, password: string): Promise<ILogin> => {
//   const url = `${api.schema + api.base + api.login}`;
//   const params = {email, password};
//
//   const {data}: { data: ILogin } = await request.post(url, params, {
//     headers: {"Content-type": "application/json"},
//   });
//
//   return data;
// };
//
// }
//
// const instance = new AuthRequest();
//
// export default instance;
