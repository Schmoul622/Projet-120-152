import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentArtisteComponent } from './content-artiste.component';

describe('ContentComponent', () => {
  let component: ContentArtisteComponent;
  let fixture: ComponentFixture<ContentArtisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentArtisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentArtisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
