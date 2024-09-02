import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { companyProviders } from './entities/company.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CompanyController],
  providers: [...companyProviders, CompanyService],
})
export class CompanyModule {}
