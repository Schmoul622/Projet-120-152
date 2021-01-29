import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisteMgtComponent } from './artiste-mgt.component';

describe('ArtisteMgtComponent', () => {
  let component: ArtisteMgtComponent;
  let fixture: ComponentFixture<ArtisteMgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtisteMgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisteMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
