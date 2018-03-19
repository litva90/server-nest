import { HttpException } from "@nestjs/core";
import { HttpStatus } from "@nestjs/common";

export class ForbidenException extends HttpException {
    constructor() {
        super({errorMessage: 'незя так', status: HttpStatus.UNAUTHORIZED}, HttpStatus.UNAUTHORIZED);
    }
}