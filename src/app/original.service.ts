import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

export interface Original {
  id: number;
  title: string;
  size: string;
  material: string;
  description: string;
  price: number;
  url: string;
  category: Category;
  quantity: number;
}

export enum Category {
  ORIGINAL = 'ORIGINAL',
  PRINT = 'PRINT',
  STICKER = 'STICKER',
}

@Injectable({
  providedIn: 'root',
})
export class OriginalService {
  constructor(private http: HttpClient) {}

  getOriginal(): Observable<Original[]> {
    return this.http.get<Original[]>(`http://localhost:8080/original`).pipe(
      tap((response: Original[]) => {
        console.log(response);
      }),
      map((response: Original[]) => {
        return response.map((item) => {
          return {
            id: item.id,
            title: item.title,
            size: item.size,
            material: item.material,
            description: item.description,
            price: item.price,
            url: item.url,
            category: item.category,
            quantity: item.quantity,
          };
        });
      })
    );
  }

  getOriginalbyCategory(
    selectedCategory: Category | null
  ): Observable<Original[]> {
    return this.http.get<Original[]>(`http://localhost:8080/original`).pipe(
      tap((response: Original[]) => {
        console.log(response);
      }),
      map((response: Original[]) => {
        return response
          .filter((item) => {
            if (selectedCategory === Category.ORIGINAL) {
              return item.category === Category.ORIGINAL;
            } else if (selectedCategory === Category.PRINT) {
              return item.category === Category.PRINT;
            } else if (selectedCategory === Category.STICKER) {
              return item.category === Category.STICKER;
            } else {
              return true; // No filter applied, return all items
            }
          })
          .map((item) => {
            return {
              id: item.id,
              title: item.title,
              size: item.size,
              material: item.material,
              description: item.description,
              price: item.price,
              url: item.url,
              category: item.category,
              quantity: item.quantity,
            };
          });
      })
    );
  }

  addOriginal(original: Original): Observable<Original> {
    return this.http
      .post<Original>(`http://localhost:8080/original`, original)
      .pipe(tap(() => window.alert('Upload finished.')));
  }
  getOriginalById(id: number) {
    return this.http.get<Original>(`http://localhost:8080/original/${id}`).pipe(
      map((response) => {
        return {
          id: response.id,
          title: response.title,
          size: response.size,
          material: response.material,
          description: response.description,
          price: response.price,
          url: response.url,
          category: response.category,
          quantity: response.quantity,
        };
      })
    );
  }
  updateOriginal(original: Original): Observable<Original> {
    const id = original.id;
    return this.http.put<Original>(
      `http://localhost:8080/original/${id}`,
      original
    );
  }
  deleteOriginal(original: Original): Observable<Original> {
    const id = original.id;
    return this.http.delete<Original>(`http://localhost:8080/original/${id}`
    );
  }
}
