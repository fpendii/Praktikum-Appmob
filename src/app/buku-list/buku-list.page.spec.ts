import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BukuListPage } from './buku-list.page';

describe('BukuListPage', () => {
  let component: BukuListPage;
  let fixture: ComponentFixture<BukuListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BukuListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
