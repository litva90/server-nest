import { Controller, Get, Post, Body, Req, HttpCode, Param, Res, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import {Request,Response,NextFunction} from "express";
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { ForbidenException } from './exceptions/forbiden.exception';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ValidationPipe } from './pipes/validation.pipe';
import { ParseIntPipe } from './pipes/parse-int.pipe';

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) {}

    @Post()
    @UseFilters(new HttpExceptionFilter())
    async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
        //throw new HttpException({errorMessage: 'sfsf'}, HttpStatus.FORBIDDEN);
        //throw new ForbidenException();
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(@Req() req: Request): Promise<any[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', new ParseIntPipe()) id) {
        return this.catsService.findOne(id);
    }
}