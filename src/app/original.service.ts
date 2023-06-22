import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Original {
  id: number;
  title: string;
  size: string;
  material: string;
  description: string;
  price: number;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class OriginalService {
  constructor(private http: HttpClient) {}

  getOriginal(): Observable<Original[]> {
    return this.http.get<Original[]>(`http://localhost:8080/original`).pipe(
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
          };
        });
      })
    );
  }
  addOriginal(original: Original): Observable<Original> {
    return this.http.post<Original>(`http://localhost:8080/original`, original);
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
        };
      })
    );
  }
}
