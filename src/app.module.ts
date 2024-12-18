import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Form } from './form/entity/form.entity';
import { FormModule } from './form/form.module';
import { GoogleRecaptchaService } from './google-recaptcha/google-recaptcha.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data.sqlite',
      entities: [Form],
      synchronize: process.env.NODE_ENV !== 'production', // 注意：生产环境中请设置为 false
    }),
    FormModule,
  ],
  controllers: [AppController],
  providers: [AppService, GoogleRecaptchaService],
})
export class AppModule {}
