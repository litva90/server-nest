import { Component } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Component()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    console.log('Saving Cat: ', cat);
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}