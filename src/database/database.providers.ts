import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5434,
        username: 'localhost',
        password: 'root',
        database: 'CARTOLA-FC',
        entities: [
          
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        migrations: ['dist/migrations/*.{ts,js}'],
        migrationsTableName: 'typeorm_migrations',
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];