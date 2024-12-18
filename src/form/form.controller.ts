import {
  Controller,
  Body,
  Post,
  Get,
  Delete,
  Put,
  Res,
  HttpStatus,
  Param,
  ValidationPipe,
  // Query,
  // UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';
import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
// import { GoogleRecaptchaService } from 'src/google-recaptcha/google-recaptcha.service';

@Controller('form')
export class FormController {
  constructor(
    private readonly formService: FormService,
    // private readonly recaptcha: GoogleRecaptchaService,
  ) {}

  // @Get('/get')
  // async findAll(@Query('pass') pass: string) {
  //   if (pass !== '123') {
  //     return new UnauthorizedException('Unauthorized');
  //   }
  //   return await this.formService.findAll();
  // }

  @Get()
  async findAll() {
    return await this.formService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return await this.formService.findById(id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: number, @Res() res: Response) {
    await this.formService.deleteById(id);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Form deleted successfully' });
  }

  @Post()
  async create(
    @Body(new ValidationPipe({ forbidUnknownValues: true }))
    formData: CreateFormDto,
    @Res() res: Response,
  ) {
    // const isValid = await this.recaptcha.verify(formData.token);
    // if (!isValid) {
    //   return res
    //     .status(HttpStatus.BAD_REQUEST)
    //     .json({ message: 'Invalid reCAPTCHA' });
    // }
    await this.formService.create(formData);
    return res
      .status(HttpStatus.CREATED)
      .json({ message: 'Form submitted successfully' });
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body(new ValidationPipe({ forbidUnknownValues: true }))
    formData: UpdateFormDto,
    @Res() res: Response,
  ) {
    await this.formService.update(id, formData);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Form updated successfully' });
  }
}
