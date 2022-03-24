import { Delete, Put, Body, Param } from '@nestjs/common';
import { Get, Post } from '@nestjs/common';
import { ParametersValidators } from 'src/common/pipes/parameters-validators';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface baseInterface {}

export class BaseController {
  private service;
  constructor(service) {
    this.service = service;
  }

  @Get('/')
  findAll() {
    return this.service.findAll();
  }

  @Post('/')
  create(@Body() data: baseInterface) {
    return this.service.create(data);
  }

  @Put('/:id')
  updateById(
    @Body() updateData,
    @Param('id', ParametersValidators) id: string,
  ) {
    return this.service.updateById(id, updateData);
  }

  @Delete('/:id')
  deleteById(@Param('id', ParametersValidators) id: string) {
    return this.service.deleteOne(id);
  }
}
