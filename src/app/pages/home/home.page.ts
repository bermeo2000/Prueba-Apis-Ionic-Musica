
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { subscribeOn } from 'rxjs';
import { DeezerService } from 'src/app/services/deezer.service';
import { MusicasService } from 'src/app/services/musicas.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  data:any
  musica:any
  idMusica:any
  musicaStore:any
  isMusica=false
  constructor(
    private DeezerService:DeezerService,
    private MusicasService:MusicasService,
    private alertCtrl:AlertController,
    private toastController:ToastController
  ) { 
    this.data=""
   }
 
  ngOnInit() {
  }


  buscar(nombre:any){
     
    this.DeezerService.buscarMusica(nombre).subscribe({
      next:(res)=>{
        this.musica=res.data
        console.log(this.musica);
        this.isMusica=true
      }
    })

  }

  obtenerDatos(id:any){
    this.idMusica=id
    this.musicaStore=this.musica.find((e:any) =>e.id==id)
    this.MusicasService.guardarMusica(this.musicaStore).subscribe({
      next:(res)=>{
        console.log(res);
        this.alert("Cancion agregada con exito")
      }
    })
    
  }

  async alert(message: string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'modal-delete',
      header: message,
      buttons: [
        {
          text: 'Ok',
          id: 'confirm-button',
        },
      ],
    });
    alert.present();
  }

    async toastAlert(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
