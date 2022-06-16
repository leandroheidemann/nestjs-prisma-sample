import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

import { FindAllParams } from './../shared/model/find-all-params';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	create(@Body() createDto: CreateUserDto) {
		return this.userService.create(createDto);
	}

	@Get()
	findAll(@Query() params: FindAllParams) {
		return this.userService.findAll(params);
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.userService.findById({ id: +id });
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateDto: UpdateUserDto) {
		return this.userService.update({ id: +id }, updateDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.userService.remove({ id: +id });
	}
}
