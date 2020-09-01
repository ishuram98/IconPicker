import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPickComponent } from './icon-pick.component';

describe('IconPickComponent', () => {
  let component: IconPickComponent;
  let fixture: ComponentFixture<IconPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
