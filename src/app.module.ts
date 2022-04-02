import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LessonModule } from './modules/lesson/lesson.module';
import { Lesson } from './modules/lesson/lesson.entity';
import { StudentModule } from './modules/student/student.module';
import { Student } from './modules/student/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/school',
      syncronize: true,
      useUnifiedTopology: true,
      entities: [Lesson, Student],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    LessonModule,
    StudentModule,
  ],
})
export class AppModule {}
