import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddImageArtisteComponent } from './dialog-add-image-artiste.component';

describe('DialogAddImageArtisteComponent', () => {
  let component: DialogAddImageArtisteComponent;
  let fixture: ComponentFixture<DialogAddImageArtisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddImageArtisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddImageArtisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
