import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNoticeContainerComponent } from './legal-notice-container.component';

describe('LegalNoticeContainerComponent', () => {
  let component: LegalNoticeContainerComponent;
  let fixture: ComponentFixture<LegalNoticeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LegalNoticeContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalNoticeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
