import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSelectModule } from '@angular/material/select'
import { FormsModule } from '@angular/forms'
import { Category } from '../../original.service';
import { RouterLink } from '@angular/router'
import { MatButtonModule } from '@angular/material/button'


@Component({
  selector: 'elw-filter',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    RouterLink,
    MatButtonModule,
  ],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() applyCategory = new EventEmitter<Category | null>();
  Options: Category[] = [Category.ORIGINAL, Category.PRINT, Category.STICKER];

  @Input() category: Category | null = Category.ORIGINAL;

  applyCategoryEmit() {
    this.applyCategory.emit(this.category!);
  }

  selectPrintsEmit() {
    this.category = Category.PRINT;
    this.applyCategoryEmit();
  }
  selectOriginalsEmit() {
    this.category = Category.ORIGINAL;
    this.applyCategoryEmit();
  }
  selectStickerEmit() {
    this.category = Category.STICKER;
    this.applyCategoryEmit();
  }

  selectAllEmit() {
    this.category = null;
    this.applyCategoryEmit();
  }

}
