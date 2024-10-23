import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Despesas } from '../models/despesas.model'; // Altere o caminho se necessário

@Injectable({
  providedIn: 'root',
})
export class DespesasService {
  private apiUrl = 'http://localhost:8080/api/despesas'; // Ajuste a URL conforme necessário
  getDespesasByMonth: any;

  constructor(private http: HttpClient) {}

  addDespesa(despesa: Despesas): Observable<Despesas> {
    return this.http.post<Despesas>(this.apiUrl, despesa);
  }
  getAllDespesas(): Observable<Despesas[]> {
    return this.http.get<Despesas[]>(this.apiUrl);
  }

  getDespesaById(id: number): Observable<Despesas> {
    return this.http.get<Despesas>(`${this.apiUrl}/${id}`);
  }

  createDespesa(despesa: Despesas): Observable<Despesas> {
    return this.http.post<Despesas>(this.apiUrl, despesa);
  }

  updateDespesa(id: number, despesa: Despesas): Observable<Despesas> {
    return this.http.put<Despesas>(`${this.apiUrl}/${id}`, despesa);
  }

  deleteDespesa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
