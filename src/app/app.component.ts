import { Component } from '@angular/core';
import { TodosComponent } from 'app/todos/todos.component';
import { NgModule } from '@angular/core/src/metadata/ng_module';


@NgModule({
  declarations:[TodosComponent]
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  })
export class AppComponent {
  title = 'app works!';
}
