import { DataSource } from 'typeorm';
import { Global, Module } from '@nestjs/common';
import dataSource from './datasource';
import * as dotenv from 'dotenv';

dotenv.config();

@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: DataSource,
      inject: [],
      useFactory: async () => {
        try {
          await dataSource.initialize();
          console.log('Database connected successfully');
          return dataSource;
        } catch (error) {
          console.log('Error connecting to database');
          //console.log(process.env.DB_HOST);
          //console.log(process.env.DB_USERNAME);
          //console.log(process.env.DB_PASSWORD);

          throw error;
        }
      },
    },
  ],
  exports: [DataSource],
})
export class TypeOrmModule {}
