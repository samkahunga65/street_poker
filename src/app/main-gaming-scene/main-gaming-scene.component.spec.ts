import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGamingSceneComponent } from './main-gaming-scene.component';

describe('MainGamingSceneComponent', () => {
  let component: MainGamingSceneComponent;
  let fixture: ComponentFixture<MainGamingSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGamingSceneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGamingSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
