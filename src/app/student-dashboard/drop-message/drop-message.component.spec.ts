import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropMessageComponent } from './drop-message.component';

describe('DropMessageComponent', () => {
  let component: DropMessageComponent;
  let fixture: ComponentFixture<DropMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
