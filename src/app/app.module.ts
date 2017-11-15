import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosComponent } from 'app/todos/todos.component';
import { SearchPipe } from 'app/todos/search.pipe';
import { AppRoutingModule } from 'app/app-routing.module';
import { Http } from '@angular/http/src/http';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
