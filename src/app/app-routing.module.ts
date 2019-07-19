import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {BookslistComponent} from './components/bookslist/bookslist.component';
import {NotFoundComponent} from './components/not-found/not-found.component';


const routes: Routes = [
  {path:'', component:WelcomeComponent, pathMatch:'full'},
  {path:'list', component:BookslistComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
