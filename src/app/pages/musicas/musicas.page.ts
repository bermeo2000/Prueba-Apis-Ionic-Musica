import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { MusicasService } from 'src/app/services/musicas.service';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.page.html',
  styleUrls: ['./musicas.page.scss'],
})
export class MusicasPage implements OnInit {

  musicas:any
  idMusica:any
  constructor(
    private MusicasService:MusicasService,
    private alertCtrl:AlertController,
    private toastController:ToastController

  ) { }

  ngOnInit() {
    this.obtnermusica()
  }

  obtnermusica(){
    this.MusicasService.mostrarMusica().subscribe({
      next:(res)=>{
        this.musicas=res
      }
    })
  }

  eliminarCancion(id:any){
    this.idMusica=id
    this.MusicasService.deleteMusica(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.obtnermusica();
        //this.musicas=this.musicas.filter((e:any)=>e.estado=1)
        this.toastAlert("cancion eliminada con exito")
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
