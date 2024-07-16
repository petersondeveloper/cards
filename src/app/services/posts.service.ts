import { Injectable } from '@angular/core';
import { Posts } from '../types/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private jsonGet: Posts[] = []

  constructor() { }

  getPosts() {

    const jsonModelo = `
    [{
      "title":"Alan Haverty",
      "imageUrl":"assets/45-4592x2576.jpg",
      "username":"Autor",
      "content":"I'm so good"
    },
    {
      "title":"Sander Weetel",
      "imageUrl":"assets/81-5000x3250.jpg",
      "username":"Photographer",
      "content":"Thanks God"
    },
    {
      "title":"Rula Sibai",
      "imageUrl":"assets/90-3000x1992.jpg",
      "username":"Higher",
      "content":"Have a nice day"
    },
    {
      "title":"Paul Evans",
      "imageUrl":"assets/78-1584x2376.jpg",
      "username":"Developer",
      "content":"Loren"
    },
    {
      "title":"Alex Shustov",
      "imageUrl":"assets/76-367x267.jpg",
      "username":"Angular",
      "content":"Loren"      
    }
      ]`

    console.log(jsonModelo)
    this.jsonGet = JSON.parse(jsonModelo);

    return this.jsonGet;

  }

}
