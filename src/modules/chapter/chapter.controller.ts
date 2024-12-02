import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Query,
	Put,
} from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import { Chapter } from '@/database/entities/Chapter';
import { IPaginatedType } from '@/pagination/paginated.decorator';
import { PaginatedChaptersDTO } from '@/pagination/paginated-chapters.dto';
import { GetChapterWithFilterDto } from './dto/get-chapter-with-filter.dto';

@Controller('chapter')
export class ChapterController {
	constructor(private readonly chapterService: ChapterService) {}

	@Post()
	async create(@Body() createChapterDto: CreateChapterDto): Promise<Chapter> {
		return await this.chapterService.create(createChapterDto);
	}

	@Get()
	async findAllChapters(
		@Query() paginationQuery: any,
	): Promise<IPaginatedType<Chapter>> {
		const paginationDto = new PaginatedChaptersDTO();
		Object.assign(paginationDto, paginationQuery);

		return await this.chapterService.findAll(paginationDto);
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<Chapter> {
		return await this.chapterService.findOne(+id);
	}

	@Put()
	async update(@Body() updateChapterDto: UpdateChapterDto): Promise<Chapter> {
		return await this.chapterService.update(updateChapterDto);
	}

	@Delete(':id')
	async remove(@Param('id') id: string): Promise<string> {
		return await this.chapterService.remove(+id);
	}

  // datnmptit
  @Get('all/filter')
  getChapterWithFilter(@Query() getChapterWithFilterDto: GetChapterWithFilterDto) {
    return this.chapterService.getChapterWithFilter(getChapterWithFilterDto);
  }
}
