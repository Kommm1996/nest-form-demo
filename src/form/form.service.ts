import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Form } from './entity/form.entity';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form)
    private readonly formRepository: Repository<Form>,
  ) {}

  async findAll(): Promise<Form[]> {
    try {
      return await this.formRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id: number): Promise<Form> {
    try {
      return await this.formRepository.findOneBy({ id });
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(id: number) {
    try {
      return await this.formRepository.delete({ id });
    } catch (error) {
      console.log(error);
    }
  }

  async create(formData: CreateFormDto) {
    try {
      this.formRepository.create(formData);
    } catch (error) {
      console.log(error);
    }
    return await this.formRepository.save(formData);
  }

  async update(id: number, formData: UpdateFormDto) {
    try {
      this.formRepository.update(id, formData);
    } catch (error) {
      console.log(error);
    }
  }
}
