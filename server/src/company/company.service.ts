import { Inject, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Repository } from 'typeorm'; // Import the Repository type
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @Inject('COMPANY_REPOSITORY')
    private companyRepository: Repository<Company>, // Define the type of companyRepository as Repository<Company>
  ) {}

  create(createCompanyDto: CreateCompanyDto) {
    return 'This action adds a new company';
  }
  async findAll(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
