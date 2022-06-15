import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenssagenComponent } from './menssagen.component';

describe('MenssagenComponent', () => {
  let component: MenssagenComponent;
  let fixture: ComponentFixture<MenssagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenssagenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenssagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
