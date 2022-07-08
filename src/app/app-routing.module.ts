import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LuisComponent } from './component/luis/luis.component';
import { MusicComponent } from './component/music/music.component';
import { CrudComponent } from './pages/crud/crud.component';

const routes: Routes = [

{path: "crud", component: CrudComponent},
{path: "luis", component: LuisComponent},
{path: "music", component: MusicComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
