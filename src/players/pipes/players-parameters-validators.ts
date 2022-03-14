import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class PlayerParametersValidators implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) throw new BadRequestException(`${metadata.data} not informed`);

    console.log('value', value);
    console.log('metadata', metadata.type);
    return value;
  }
}
