import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  Length,
} from 'class-validator';

export class CreateFormDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 10)
  name: string;

  @IsNotEmpty()
  @IsString()
  // @Length(0, 15)
  tel: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @Length(0, 200)
  message: string;
}
