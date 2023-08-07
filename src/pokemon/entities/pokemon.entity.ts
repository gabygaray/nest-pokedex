import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//Las entidades hacen una referencia a como nosotros vamos a querer grabar en base de datos (en mongodb se le llama colección a las tablas.)
@Schema()
export class Pokemon extends Document {
  @Prop({
    unique: true, //Lo establece como único
    index: true, //Permite identificar exactamente lo que se está buscando, le da un índice
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
