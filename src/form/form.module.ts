import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from './entity/form.entity';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { GoogleRecaptchaService } from 'src/google-recaptcha/google-recaptcha.service';

@Module({
  imports: [TypeOrmModule.forFeature([Form])],
  controllers: [FormController],
  providers: [FormService, GoogleRecaptchaService],
})
export class FormModule {}
