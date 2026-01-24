import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola amigos mios, vamos a apreder a usar nestjs';
  }
}
