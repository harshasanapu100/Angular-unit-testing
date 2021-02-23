/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import {  from } from 'rxjs';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [TodosComponent],
      providers: [TodoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should load the todos from the server', () => {
    // Arrange
    let todoService: TodoService = TestBed.get(TodoService);
    spyOn(todoService, 'getTodos').and.returnValue(from([1,2,3]));

    // Act
    fixture.detectChanges();

    // Assert 
    expect(component.todos.length).toBe(1);
  });
});
