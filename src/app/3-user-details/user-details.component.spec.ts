/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';

class RouterStub {
  navigate(params) {

  }
}
class ActivatedRouteStub {
  private subject = new Subject();

  push(value) {
    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect the user to the users page after saving', () => {
    // Arrange
    const routerService = TestBed.inject(Router);
    const routerSpy = spyOn(routerService, 'navigate');

    // Act
    component.save();

    // Assert
    expect(routerSpy).toHaveBeenCalledWith(['users']);
  });

  it('should navigate the user to not found page when an invalid user id is passed', () => {
    // Arrange
    const routerService = TestBed.inject(Router);
    const routerSpy = spyOn(routerService, 'navigate');
    const activatedRoute: any = TestBed.inject(ActivatedRoute);
    activatedRoute.push({ id: 0 });

    // Assert 
    expect(routerSpy).toHaveBeenCalledWith(['not-found']);
  });
});
