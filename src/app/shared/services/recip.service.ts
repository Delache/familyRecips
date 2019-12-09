import { Recip } from './../models/recip';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipService {
  private Url = 'http://localhost:3000/api/recips';

  constructor(private http: HttpClient) { }

  getAllRecips(): Observable<any> {
    return this.http.get(this.Url);
  }

  addRecip(recip: Recip): Observable<any> {
    return this.http.post(this.Url, recip);
  }
  deleteRecip(id: number): Observable<any> {
      return this.http.delete(this.Url + `/${id}`);
  }
  updateRecip(recip: Recip): Observable<any> {
      return this.http.put(this.Url + `/${recip.id}`, recip);
  }
  getRecipById(id: number): Observable<any> {
    return this.http.get(this.Url + `/${id}`);
  }
  searchRecips(term: string): Observable<Recip[]> {
    if (!term.trim()) {
      return of([]);
    }
}
}
