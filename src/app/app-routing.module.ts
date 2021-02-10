import { PalmeirasComponent } from './teams/palmeiras/palmeiras.component';
import { LayoutHomeComponent } from './layout/layout-home/layout-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { 
    path: "",
    component: LayoutHomeComponent,
    children: [
      { path: "palmeiras", component: PalmeirasComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
