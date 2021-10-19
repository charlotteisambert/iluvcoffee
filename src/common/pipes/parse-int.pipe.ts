import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const intvalue = parseInt(value, 10);

    if (isNaN(intvalue)) {
      throw new BadRequestException(
        `Validation failed. "${intvalue}" is not an integer.`,
      );
    }

    return intvalue;
  }
}
