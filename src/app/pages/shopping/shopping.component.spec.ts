import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingComponent } from './shopping.component';
import { LoginService } from '../login/login.service';

describe('ShoppingComponent', () => {
  let component: ShoppingComponent;
  let fixture: ComponentFixture<ShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableModule, MatPaginatorModule, ShoppingComponent],
      providers: [LoginService, NgbModal]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values', () => {
    expect(component.displayedColumns).toEqual(['id', 'title', 'category', 'price', 'actions']);
    expect(component.data).toBeUndefined();
    expect(component.selectedItem).toBeUndefined();
    expect(component.selectedCategory).toBe('All');
    expect(component.selectedRows).toBe('20');
    expect(component.modalVisible).toBeFalse();
  });

  it('should call buildTable method on ngOnInit', () => {
    spyOn(component, 'buildTable');
    component.ngOnInit();
    expect(component.buildTable).toHaveBeenCalled();
  });

  it('should change table size', () => {
    const event = { target: { value: '10' } };
    component.changeTableSize(event);
    expect(component.selectedRows).toBe('10');
  });

  it('should change category', () => {
    const event = { target: { value: 'jewelery' } };
    component.changeCategory(event);
    expect(component.selectedCategory).toBe('jewelery');
  });

  it('should logout', () => {
    const loginService = TestBed.inject(LoginService);
    spyOn(loginService, 'logout');
    component.logout();
    expect(loginService.logout).toHaveBeenCalled();
  });
});
