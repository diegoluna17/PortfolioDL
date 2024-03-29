import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../model/estudios';

@Injectable({
  providedIn: 'root'
})
export class SEstudiosService {
 /*  URL = "http://localhost:8080/estudios/" */
  URL = "https://backendjava8.onrender.com/estudios/"
  

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Estudios[]>{
    return this.httpClient.get<Estudios[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Estudios>{
    return this.httpClient.get<Estudios>(this.URL + `detail/${id}`)
  }

  public save(estudio:Estudios): Observable<any>{
    return this.httpClient.post<any>(this.URL + "create", estudio);  
  }

  public update(id: number, estudio:Estudios): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, estudio);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
