import { Company } from 'src/company/entities/company.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'dating',
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        entities: [Company],
        synchronize: true,
      });

      const ds = dataSource.initialize();
      ds.then(() => {
        console.log('Database connection established');
      });
      return ds;
    },
  },
];
