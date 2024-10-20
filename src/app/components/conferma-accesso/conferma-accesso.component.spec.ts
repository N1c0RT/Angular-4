import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfermaAccessoComponent } from './conferma-accesso.component';

describe('ConfermaAccessoComponent', () => {
  let component: ConfermaAccessoComponent;
  let fixture: ComponentFixture<ConfermaAccessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfermaAccessoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfermaAccessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
