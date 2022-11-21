import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from '../entity/user.entity';
import { Round } from '../entity/round.entity';



const configService = new ConfigService();
export default new DataSource({
  type: 'postgres',
  host: configService.get("HOST"),
    port: configService.get("PORT"),
    username: configService.get("HOST"),
    password: configService.get("PASSWORD"),
    database: configService.get("DATABASE"),
  entities: [User, Round
  ],
  migrations: ["./migration/*.ts"],
  migrationsTableName: 'typeorm_migrations',
  // synchronize: true,
});