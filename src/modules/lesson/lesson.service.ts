import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { CreateLessonInput } from './lesson.input';
import { Lesson } from './lesson.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  async getLesson(id: string): Promise<Lesson> {
    return this.lessonRepository.findOneBy({ id });
  }

  async getLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate, students } = createLessonInput;

    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
      students,
    });

    return this.lessonRepository.save(lesson);
  }

  async assignStudentsToLesson(
    lessonId: string,
    studentsIds: string[],
  ): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOneBy({ id: lessonId });
    lesson.students = [...lesson.students, ...studentsIds];
    return this.lessonRepository.save(lesson);
  }
}
