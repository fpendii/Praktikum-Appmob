import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BukuDetailPage } from './buku-detail.page';

describe('BukuDetailPage', () => {
  let component: BukuDetailPage;
  let fixture: ComponentFixture<BukuDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BukuDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
