import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellcarstatusComponent } from './sellcarstatus.component';

describe('SellcarstatusComponent', () => {
  let component: SellcarstatusComponent;
  let fixture: ComponentFixture<SellcarstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellcarstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellcarstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
