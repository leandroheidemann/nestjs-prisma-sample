import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	create(@Body() data: Prisma.UserCreateInput) {
		return this.userService.create(data);
	}

	@Get()
	findAll() {
		return this.userService.findAll({});
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.userService.findById({ id: +id });
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() data: Prisma.UserUpdateInput) {
		return this.userService.update({ id: +id }, data);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.userService.remove({ id: +id });
	}
}
