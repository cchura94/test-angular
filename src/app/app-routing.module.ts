import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'carrito',
    component: CarritoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
