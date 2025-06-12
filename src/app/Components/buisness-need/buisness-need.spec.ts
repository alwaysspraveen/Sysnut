import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuisnessNeed } from './buisness-need';

describe('BuisnessNeed', () => {
  let component: BuisnessNeed;
  let fixture: ComponentFixture<BuisnessNeed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuisnessNeed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuisnessNeed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
