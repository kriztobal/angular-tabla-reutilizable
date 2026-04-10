import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerTablaComponent } from './primer-tabla.component';

describe('PrimerTablaComponent', () => {
  let component: PrimerTablaComponent;
  let fixture: ComponentFixture<PrimerTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimerTablaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
