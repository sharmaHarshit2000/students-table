import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentsService {

  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
  ) {}

  findAll() {
    return this.studentRepo.find();
  }

  create(data) {
    const student = this.studentRepo.create(data);
    return this.studentRepo.save(student);
  }

  async update(id: number, data) {
    await this.studentRepo.update(id, data);
    return this.studentRepo.findOneBy({ id });
  }

  async remove(id: number) {
    await this.studentRepo.delete(id);
    return { message: "Student deleted successfully" };
  }

}