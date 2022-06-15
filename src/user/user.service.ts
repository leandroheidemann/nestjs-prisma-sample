import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

import { PrismaService } from './../prisma/prisma.service';

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	create(data: Prisma.UserCreateInput): Promise<User> {
		return this.prisma.user.create({ data });
	}

	findAll(params: {
		skip?: number;
		take?: number;
		cursor?: Prisma.UserWhereUniqueInput;
		where?: Prisma.UserWhereInput;
		orderBy?: Prisma.UserOrderByWithRelationInput;
	}): Promise<User[]> {
		const { skip, take, cursor, where, orderBy } = params;

		return this.prisma.user.findMany({
			skip,
			take,
			cursor,
			where,
			orderBy,
		});
	}

	findById(id: Prisma.UserWhereUniqueInput): Promise<User | null> {
		return this.prisma.user.findUnique({ where: id });
	}

	update(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput): Promise<User> {
		return this.prisma.user.update({ data, where });
	}

	remove(where: Prisma.UserWhereUniqueInput) {
		return this.prisma.user.delete({ where });
	}
}
