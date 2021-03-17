import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsersList(){
    return this.http.get('https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products/');
  }

  addUser(data){
    return this.http.post('https://fakestoreapi.com/profile' , data , {
      headers : {
        'Autherization' : "12dsa54d6afa3s1as56f4ds5af48fd46fa4sdf8asf84a6fasf"
      },
      params : {
        name : "Ahmed"
      }
    });
  }

}
