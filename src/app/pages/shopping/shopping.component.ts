import { Component, inject, TemplateRef } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { LoginService } from '../login/login.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatPaginator],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css',
})
export class ShoppingComponent {
  // Table Data
  displayedColumns: string[] = ['id', 'title', 'category', 'price', 'actions'];
  // API Data
  data: any;
  selectedItem: any;
  // Filtering
  selectedCategory = 'All';
  selectedRows = '20';
  // Modal
  modalVisible = false;

  constructor(private loginService: LoginService) {}
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.buildTable();
  }

  buildTable(): void {
    let rows = null;
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        if (this.selectedCategory !== 'All') {
          rows = data.filter((item: any) => {
            return item.category === this.selectedCategory;
          });
          this.data = rows.slice(0, this.selectedRows);
        } else {
          this.data = data.slice(0, this.selectedRows);
        }
      });
  }

  changeTableSize(event: any): void {
    this.selectedRows = event.target.value;
    this.buildTable();
  }

  changeCategory(event: any): void {
    this.selectedCategory = event.target.value;
    this.buildTable();
  }

  openModal(content: TemplateRef<any>, data: any) {
    this.selectedItem = data;
    this.modalService.open(content);
  }

  logout() {
    this.loginService.logout();
  }
}
