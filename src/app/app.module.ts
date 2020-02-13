import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-app/todo-list/todo-list.component';
import { TodoNewTaskComponent } from './todo-app/todo-new-task/todo-new-task.component';
import { TodoService } from './services/todo.service';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { HeaderComponent } from './todo-app/header/header.component';
import { FooterComponent } from './todo-app/footer/footer.component';
import { TodoItemComponent } from './todo-app/todo-item/todo-item.component';
import { TodoFilterComponent } from './todo-app/todo-filter/todo-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoNewTaskComponent,
    TodoAppComponent,
    HeaderComponent,
    FooterComponent,
    TodoItemComponent,
    TodoFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
