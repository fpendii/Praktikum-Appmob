import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BukuTambahPage } from './buku-tambah.page';

describe('BukuTambahPage', () => {
  let component: BukuTambahPage;
  let fixture: ComponentFixture<BukuTambahPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BukuTambahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
