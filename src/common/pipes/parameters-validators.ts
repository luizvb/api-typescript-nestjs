import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class ParametersValidators implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) throw new BadRequestException(`${metadata.data} not informed`);
    return value;
  }
}
