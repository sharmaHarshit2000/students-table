import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete
} from '@nestjs/common';

import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {

  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Post()
  create(@Body() body) {
    return this.studentsService.create(body);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() body
  ) {
    return this.studentsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.studentsService.remove(id);
  }

}