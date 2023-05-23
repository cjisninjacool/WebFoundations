import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
const routes: Routes = [
  { path: "", redirectTo: "Home", pathMatch: "full" },
  {path: 'Home', component:HomeComponentComponent},
  { path: "**", component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
