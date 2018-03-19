
import { ExceptionFilter, Catch } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { ForbidenException } from '../exceptions/forbiden.exception';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, response) {
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        message: `It's a message from the exception filter`,
      });
  }
}