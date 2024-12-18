import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GoogleRecaptchaService {
  private readonly secretKey = process.env.SECRET_KEY;

  async verify(recaptchaToken: string): Promise<boolean> {
    try {
      const response = await axios({
        url: 'https://www.recaptcha.net/recaptcha/api/siteverify',
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: `secret=${this.secretKey}&response=${recaptchaToken}`,
      });
      const { success } = response.data;
      if (!success) {
        console.warn('token验证失败，Token无效');
      }
      console.warn('token验证成功');
      return success;
    } catch (error) {
      console.warn('token验证失败，网络问题');
      return false;
    }
  }
}
