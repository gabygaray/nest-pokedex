import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  //Esto indica que es una dependencia de mi servicio, y que no es injectado.
  private readonly axios: AxiosInstance = axios;

  async executedSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];

      return console.log({ name, no });
    });

    return data.results;
  }
}
