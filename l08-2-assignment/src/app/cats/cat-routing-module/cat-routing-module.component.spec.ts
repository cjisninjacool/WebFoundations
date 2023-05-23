import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatRoutingModuleComponent } from './cat-routing-module.component';

describe('CatRoutingModuleComponent', () => {
  let component: CatRoutingModuleComponent;
  let fixture: ComponentFixture<CatRoutingModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatRoutingModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatRoutingModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
