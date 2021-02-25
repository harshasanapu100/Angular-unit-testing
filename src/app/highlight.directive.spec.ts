/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `
})
class DirectiveHostComponent {
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DirectiveHostComponent,
        HighlightDirective
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  });

  it('should highlight the first element with cyan', () => {
    // Arrange
    const de = fixture.debugElement.queryAll(By.css('p'))[0];

    // Assert
    expect(de.nativeElement.style.backgroundColor).toBe('cyan');
  });

  it('should highlight the second element with default color', () => {
    // Arrange
    const de = fixture.debugElement.queryAll(By.css('p'))[1];

    const directive = de.injector.get(HighlightDirective);

    // Assert
    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
  });

});
