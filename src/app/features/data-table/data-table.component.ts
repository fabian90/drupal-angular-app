import { Component, OnInit } from '@angular/core';
import { DrupalApiService } from '../../infrastructure/services/drupal-api.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  data: any[] = [];
  searchText: string = '';
  itemsPerPage: number = 10;
  currentPage: number = 1;

  constructor(private drupalApiService: DrupalApiService) {}

  ngOnInit(): void {
    this.drupalApiService.getData().subscribe((data) => {
      console.log(data);
      this.data = data; // Asigna los datos obtenidos
    });
  }

  onItemsPerPageChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement; // Afirmar el tipo de evento
    this.itemsPerPage = +selectElement.value; // Convertir el valor a número
    this.currentPage = 1; // Reiniciar a la primera página
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    console.log(this.data.slice(start, start + this.itemsPerPage));
    return this.filteredData.slice(start, start + this.itemsPerPage);
  }

  get filteredData() {
    return this.data.filter(item => {
      return Object.values(item).some(value =>
        (value as string).toLowerCase().includes(this.searchText.toLowerCase())
      );
    });
  }

  get totalPages() {
    return Math.ceil(this.filteredData.length / this.itemsPerPage);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }
}
