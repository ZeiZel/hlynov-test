import { IAuthForm } from './auth.interface';

export interface IBaseAuthRequest extends IAuthForm {}
export interface IBaseAuthResponse {
	status: string;
}