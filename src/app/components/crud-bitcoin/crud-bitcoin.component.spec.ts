import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudBitcoinComponent } from './crud-bitcoin.component';

describe('CrudBitcoinComponent', () => {
  let component: CrudBitcoinComponent;
  let fixture: ComponentFixture<CrudBitcoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudBitcoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudBitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
