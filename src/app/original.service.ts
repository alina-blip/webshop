import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'

export interface Original {
  id: number;
  title: string;
  size: string;
  material: string;
  description: string;
  price: number;
  publicID: string;
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
            publicID: item.publicID,
          };
        });
      })
    );
  }
  addOriginal(original: Original): Observable<Original> {
    return this.http.post<Original>(`http://localhost:8080/original`, original);
  }

  // addImagetoCloudinary(file: File): Observable<file>{
  //   return this.http.post<>(`https://api.cloudinary.com/v1_1/dwrrcohl5/upload`)
  // }

  uploadSignature(vals: File): Observable<any>{
    return this.http.post(`https://api.cloudinary.com/v1_1/dwrrcohl5/image/upload`, vals)
  }

}
