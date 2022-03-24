import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BaseService {
  private Repository;
  constructor(repository: any) {
    this.Repository = repository;
  }

  async findAll(): Promise<any> {
    return this.Repository.find();
  }

  async findById(id: string): Promise<any> {
    const data = await this.Repository.findById(id);
    if (!data) throw new NotFoundException(`Data ${id} not found`);
    return data;
  }

  async findOne(filter: Record<string, any>): Promise<any> {
    return this.Repository.find(filter);
  }

  async create(body): Promise<any> {
    const data = this.Repository.create(body);
    return this.Repository.save(data);
  }

  async updateById(id, updateData): Promise<any> {
    const data = await this.Repository.findById(id);
    if (!data) throw new NotFoundException(`Data ${id} not found`);

    return this.Repository.updateOneById(data.id, updateData);
  }

  async deleteOne(id: string): Promise<any> {
    const data = await this.Repository.findById(id);
    if (!data) throw new NotFoundException(`Data ${id} not found`);

    return this.Repository.deleteOneById(data._id);
  }
}
