/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [AppComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component should have a router outlet', () => {
    // Arrange
    const de = fixture.debugElement.query(By.directive(RouterOutlet));

    // Assert
    expect(de).not.toBeNull();
  });

  it('should have a link to todos page', () => {
    // Arrange
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de=>de.properties['href'] === '/todos');

    // Assert
    expect(index).toBeGreaterThan(-1);
  });

});
