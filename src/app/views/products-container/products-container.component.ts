import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../../components/products/products.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category, Original, OriginalService } from '../../original.service';
import { FilterComponent } from '../../components/filter/filter.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'elw-products-container',
  standalone: true,
  imports: [CommonModule, ProductsComponent, FooterComponent, FilterComponent],
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
})
export class ProductsContainerComponent implements OnInit {
  original$: Observable<Original[]> | undefined;
  category$ = new BehaviorSubject<Category | null>(null);

  constructor(
    private originalService: OriginalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const categoryFromUrl = this.route.snapshot.queryParamMap.get('category');
    if (categoryFromUrl) {
      const selectedCategory: Category = categoryFromUrl as Category; // Assuming Category is a string type
      this.applyCategory(selectedCategory);
    } else {
      this.applyCategory(null);
    }
  }

  applyCategory(selectedCategory: Category | null) {
    this.category$.next(selectedCategory);
    const category = this.category$.value;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        category: category,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
      state: {
        filters: {
          category: category,
        },
      },
    });
    this.original$ = this.originalService.getOriginalbyCategory(category);
  }
}
