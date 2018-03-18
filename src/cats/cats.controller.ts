import { Controller, Get, Post, Body, Req, HttpCode, Param } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) {}

    @Post()
    @HttpCode(204)
    async create(@Body() createCatDto: CreateCatDto) {
        console.log('createCatDto: ', createCatDto)
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<any[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param() params) {
        console.log(params);
        return {};
    }
}