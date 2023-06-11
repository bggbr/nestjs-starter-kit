import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app/app.module';
import * as morgan from 'morgan';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(morgan('dev'));
    await app.listen(1222);
}
bootstrap();
