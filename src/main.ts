import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// arquivo que cria a aplicação Nest

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // padrão de projeto Factory
  await app.listen(process.env.PORT ?? 3000); // está na porta 3000
}
bootstrap();
