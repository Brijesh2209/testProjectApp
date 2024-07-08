import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRoutedComComponent } from './new-routed-com.component';

describe('NewRoutedComComponent', () => {
  let component: NewRoutedComComponent;
  let fixture: ComponentFixture<NewRoutedComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewRoutedComComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewRoutedComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
