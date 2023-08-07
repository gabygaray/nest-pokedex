import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static'; // Hay que instalarlo
import { join } from 'path'; // Viene en node
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'), //Nos conectamos a la DB

    PokemonModule,
    CommonModule,
  ],
})
export class AppModule {}
