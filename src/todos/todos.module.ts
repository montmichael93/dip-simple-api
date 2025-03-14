import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todos.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TodoEntity]),
    // Other imports
  ],
  providers: [TodosService],
  controllers: [TodosController],
})
export class TodosModule {}
