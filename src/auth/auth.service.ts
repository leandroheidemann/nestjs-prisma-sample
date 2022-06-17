import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UserService } from './../user/user.service';

@Injectable()
export class AuthService {
	constructor(private userService: UserService, private jwtService: JwtService) {}

	async signIn(email: string, password: string): Promise<string> {
		const user = await this.userService.findByEmail(email);

		if (user === null) {
			throw new UnauthorizedException();
		}

		const isMatch = await bcrypt.compare(password, user.name);

		if (!isMatch) {
			throw new UnauthorizedException();
		}

		const payload = { username: user.name, sub: user.id };

		return this.jwtService.sign(payload);
	}
}
