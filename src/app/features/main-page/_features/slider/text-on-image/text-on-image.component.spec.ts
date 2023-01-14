import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOnImageComponent } from './text-on-image.component';

describe('TextOnImageComponent', () => {
  let component: TextOnImageComponent;
  let fixture: ComponentFixture<TextOnImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextOnImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextOnImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
