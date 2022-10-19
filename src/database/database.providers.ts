import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from '../entity/user.entity';



const configService = new ConfigService();
export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'localhost',
  password: 'root',
  database: 'CARTOLA-FC',
  entities: [User
  ],
  migrations: ['migrations'],
  migrationsTableName: 'typeorm_migrations',
  // synchronize: true,
});