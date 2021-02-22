import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let fixture: ComponentFixture<VoterComponent>;
  let component: VoterComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterComponent);;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render total votes', () => {
    // Arrange
    component.othersVote = 20;
    component.myVote = 1;

    // Act
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('.vote-count'));
    const el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('21');
  });

  it('should highlight upvote button if I have upvoted', () => {
    // Arrange
    component.myVote = 1;

    // Act
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    // Assert
    expect(de.classes['highlighted']).toBeTruthy();
  });

  it('should increase total votes when I click the upvote button', () => {
    // Arrrange
    const button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    // Act
    button.triggerEventHandler('click', null);

    // Assert
    expect(component.myVote).toEqual(1);
  });

});
