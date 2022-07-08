import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './pages/crud/crud.component';
import { RegistrarUsuarioComponent } from './pages/crud/registrar-usuario/registrar-usuario.component';
import { ActualizarUsuarioComponent } from './pages/crud/actualizar-usuario/actualizar-usuario.component';
import { LuisComponent } from './component/luis/luis.component';
import { MusicComponent } from './component/music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    RegistrarUsuarioComponent,
    ActualizarUsuarioComponent,
    LuisComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
