import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './shared/home/home.component';
import { WeAreComponent } from './we-are/we-are.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'quienes-somos', component: WeAreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
