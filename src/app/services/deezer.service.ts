import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  constructor(   private http:HttpClient) { }

  buscarMusica(nombre:any){
    return this.http.get<any>(`${environment.urlDeezer}${nombre}`)
}
}
