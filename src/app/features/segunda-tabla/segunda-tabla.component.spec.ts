import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaTablaComponent } from './segunda-tabla.component';

describe('SegundaTablaComponent', () => {
  let component: SegundaTablaComponent;
  let fixture: ComponentFixture<SegundaTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundaTablaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundaTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
