import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageComponent } from '../../components/storage/storage.component';
import { OriginalService, Original } from '../../original.service';
import { Observable } from 'rxjs';
import { UploadComponent } from '../../components/upload/upload.component';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'elw-storage-container',
  standalone: true,
  imports: [
    CommonModule,
    StorageComponent,
    UploadComponent,
  ],
  templateUrl: './storage-container.component.html',
  styleUrls: ['./storage-container.component.scss'],
})
export class StorageContainerComponent implements OnInit {
  original$: Observable<Original[]> | undefined;
  origin$: Observable<Original> | undefined;

  constructor(private originalService: OriginalService, private router: Router) {}
  ngOnInit() {
    this.original$ = this.originalService.getOriginal();



  }
  addToDatabase(original: Original) {
    this.origin$ = this.originalService.addOriginal(original);
  }


}
