import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://api.spoonacular.com';
  private apiKeys = 'cf4cf657d73b43e0a522b8a8ec6c9d02';
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.set('Content-type', 'application/json');
    this.headers.set('x-api-key', this.apiKeys);
  }

  postHttp(url: string, data: any) {
    const body = JSON.stringify(data);
    return this.http.post(`${this.baseUrl}/${url}`, body, {
      headers: {
        'Content-type': 'application/json',
        'x-api-key': this.apiKeys,
      },
    });
  }
  getHttp(targetUrl: string) {
    console.warn('target', targetUrl);
    return this.http.get(`${this.baseUrl}/${targetUrl}`, {
      headers: {
        'Content-type': 'application/json',
        'x-api-key': this.apiKeys,
      },
    });
  }
}
