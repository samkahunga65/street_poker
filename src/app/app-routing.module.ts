import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGamingSceneComponent } from './main-gaming-scene/main-gaming-scene.component';

const routes: Routes = [
  { path: '', component: MainGamingSceneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }