import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    //Definimos el modelo
    MongooseModule.forFeature([
      {
        name: Pokemon.name, //Este name no es el del schema, si no es el name que extiende de Document.
        schema: PokemonSchema,
      },
    ]),
  ],
})
export class PokemonModule {}
