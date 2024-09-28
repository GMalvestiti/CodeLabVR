import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateConsultaComponent } from './template-consulta.component';

describe('TemplateConsultaComponent', () => {
  let component: TemplateConsultaComponent;
  let fixture: ComponentFixture<TemplateConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateConsultaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
