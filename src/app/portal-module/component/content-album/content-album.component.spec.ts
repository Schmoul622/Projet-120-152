import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAlbumComponent } from './content-album.component';

describe('ContentAlbumComponent', () => {
  let component: ContentAlbumComponent;
  let fixture: ComponentFixture<ContentAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
