import { User } from '@/common/decorators/user.decorator';
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('/get-profile')
	async getProfile(@User('userId') userId: number) {
		return await this.userService.getProfile(userId);
	}
}