import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from '@/database/entities/Country';

@Module({
	imports: [TypeOrmModule.forFeature([Country])],
	controllers: [CountryController],
	providers: [CountryService],
	exports: [CountryService],
})
export class CountryModule {}
