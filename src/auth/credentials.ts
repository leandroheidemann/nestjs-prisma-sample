import { IsEmail, IsNotEmpty } from 'class-validator';

export class Credentials {
	@IsEmail()
	@IsNotEmpty()
	email: string;

	@IsNotEmpty()
	password: string;
}
