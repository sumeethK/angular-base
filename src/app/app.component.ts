import { Component } from '@angular/core';
import { TodosComponent } from 'app/todos/todos.component';
import { NgModule } from '@angular/core/src/metadata/ng_module';
import { SearchPipe } from 'app/todos/search.pipe';


@NgModule({
  declarations:[TodosComponent, SearchPipe]
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  })
export class AppComponent {
  title = 'app works!';
}
