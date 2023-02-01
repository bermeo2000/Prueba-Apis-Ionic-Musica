import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FiltroPipe } from './pipes/filtro.pipe';
import { PipeModule } from './pipes/pipe/pipe.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';


@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,PipeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  },],

  bootstrap: [AppComponent],
})
export class AppModule {}
