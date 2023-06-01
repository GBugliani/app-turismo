import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IntercontinentalPage } from './intercontinental.page';

describe('IntercontinentalPage', () => {
  let component: IntercontinentalPage;
  let fixture: ComponentFixture<IntercontinentalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IntercontinentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
