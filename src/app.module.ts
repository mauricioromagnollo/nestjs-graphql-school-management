import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';

import { LessonModule } from './modules/lesson/lesson.module';
import { Lesson } from './modules/lesson/lesson.entity';
import { StudentModule } from './modules/student/student.module';
import { Student } from './modules/student/student.entity';
import { configValidationSchema } from './config/config.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.APP_ENV}`],
      validationSchema: configValidationSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const host = configService.get('MONGODB_HOST');
        const database = configService.get('MONGODB_DATABASE');

        return {
          type: 'mongodb',
          url: `mongodb://${host}/${database}`,
          syncronize: true,
          useUnifiedTopology: true,
          entities: [Lesson, Student],
        };
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      debug: process.env.APP_ENV !== 'prod',
      playground: process.env.APP_ENV !== 'prod',
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    LessonModule,
    StudentModule,
  ],
})
export class AppModule {}
