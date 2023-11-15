import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { DatabaseModule } from './database/database.module';

@Module({
	imports: [ConfigModule.forRoot(), DatabaseModule, CustomerModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}