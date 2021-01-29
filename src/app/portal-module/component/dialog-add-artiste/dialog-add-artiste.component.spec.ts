import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddArtisteComponent } from './dialog-add-artiste.component';

describe('DialogAddArtisteComponent', () => {
  let component: DialogAddArtisteComponent;
  let fixture: ComponentFixture<DialogAddArtisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddArtisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddArtisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
