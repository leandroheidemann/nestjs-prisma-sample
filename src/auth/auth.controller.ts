import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { Credentials } from './credentials';

@Controller('auth')
export class AuthController {
	constructor(private service: AuthService) {}

	@Post('signin')
	signIn(@Body() credentials: Credentials): Promise<string> {
		return this.service.signIn(credentials.email, credentials.password);
	}
}
