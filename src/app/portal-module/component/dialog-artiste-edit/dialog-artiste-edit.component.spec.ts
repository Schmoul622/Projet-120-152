import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogArtisteEditComponent } from './dialog-artiste-edit.component';

describe('DialogArtisteEditComponent', () => {
  let component: DialogArtisteEditComponent;
  let fixture: ComponentFixture<DialogArtisteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogArtisteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogArtisteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
