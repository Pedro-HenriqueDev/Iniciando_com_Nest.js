import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaService } from '../../database/PrismaService';

@Module({
  controllers: [BooksController],
  providers: [BooksService, PrismaService]
})
export class BooksModule {}
