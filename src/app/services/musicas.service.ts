import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  constructor(private http: HttpClient) { }
/* mostrar */
guardarMusica(form:any){
  const params =new FormData();
  params.set('title',form.title);
  params.set('title_short',form.title_short);
  params.set('preview',form.preview);
  params.set('duration',form.duration);
  params.set('cover_small',form.album.cover_small);
  return this.http.post(`${environment.urlApi}musicas`,params)

}

mostrarMusica(){
  return this.http.get<any>(`${environment.urlApi}musicas`)
}

deleteMusica(id:any){
    return this.http.delete(`${environment.urlApi}musicas/${id}`)
}

}
