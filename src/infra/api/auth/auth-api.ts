import { AxiosError } from 'axios';
import axiosClient from "../axios-client/axios-client";
import axiosClientProtected  from "../axios-client/axios-client-protected";
import { 
    SigninModel,
} from './types'
import {
  authRoutes
} from './routes';
import { SetStorage } from "../../cache";
import { TOKENS } from '../../../utils/constants';

// login
export const Signin = async (model: SigninModel) => {
  await axiosClient.post( authRoutes.LOGIN_ROUTE, model).then((response) => {
    // Extract tokens
    const access_token = response.data.access_token;
    const refresh_token = response.data.refresh_token;
    const user_type_token = response.data.user_type;

    // Set token in localstorage
    SetStorage(TOKENS.ACCESS_TOKEN, access_token);
    SetStorage(TOKENS.REFRESH_TOKEN, refresh_token);
    SetStorage(TOKENS.USER_TYPE_TOKEN, user_type_token);

  }).catch((error: AxiosError) => {
    return Promise.reject(error);
  });
}
//  Make a Password Verification POST request
export const VerifyUser = async (): Promise<Boolean> => {

  await axiosClientProtected.get(authRoutes.VERIFY_USER).then((response) => {
  }).catch((error: AxiosError) => {
    return Promise.reject(false)
  });

  return Promise.resolve(true)
}


