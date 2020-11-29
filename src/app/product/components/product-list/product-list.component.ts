import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  // To store products from DB
  products$: Observable<Product[]>; // @Idirce see stocts$ in p.
  products: Product[];
  recentPosts: Product[];
  sortOptions: SelectItem[];
  sortKey: SelectItem;
  sortOrder: number;
  sortField: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Get a list of products from DB
    this.products$ = this.productService.getProducts();

    this.sortOptions = [
      { label: 'Produits', value: '!price' },
      { label: 'Products', value: 'price' }
    ];
    this.sortKey = this.sortOptions[0];
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  // Logic to add a product in Chart
  addToChart(product) {


  }




}
