import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private url = "https://opentdb.com/api.php"
  
  constructor(private http:HttpClient) { }

  public getQuizQuestions(difficulty:string,limit:number,type:string):Observable<any>{
    return this.http.get(`${this.url}?amount=${limit}&type=${type}&difficulty=${difficulty}`);
  }

}
