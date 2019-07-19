import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {BookslistComponent} from './components/bookslist/bookslist.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {BookDetailsComponent} from './components/book-details/book-details.component';


const routes: Routes = [
  {path:'', component:WelcomeComponent, pathMatch:'full'},
  {path:'list', component:BookslistComponent},
  {path:'bookdetails/:isbn', component:BookDetailsComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
