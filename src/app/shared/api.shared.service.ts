import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://api.spoonacular.com';
  private apiKeys = 'cf4cf657d73b43e0a522b8a8ec6c9d02';
  private hash = 'a7a06bb364892f48418a2949e42e52b27e1ae12a';
  private username = 'amirtbi5';
  private headers: HttpHeaders;
  fetchStatus = new Subject<string>();
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.set('Content-type', 'application/json');
    this.headers.set('x-api-key', this.apiKeys);
  }

  getUserinfo() {
    return { hash: this.hash, username: this.username };
  }

  // get(url: string) {
  //   const fetch$ = new Observable((observer) => {
  //     fetch(url, {
  //       method: 'Get',
  //       headers: {
  //         'content-type': 'application/json',
  //         'x-api-key': this.apiKeys,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         observer.next(data);
  //         observer.complete();
  //       })
  //       .catch((error) => {
  //         observer.error('Something went wrong');
  //       });
  //   });
  //   return fetch$;
  // }
  postHttp(url: string, data: any, config?: any) {
    this.fetchStatus.next('sending');
    const body = JSON.stringify(data);
    return this.http.post(`${this.baseUrl}/${url}`, body, {
      headers: {
        'user-agent': 'chrome',
        'x-api-key': this.apiKeys,
      },
      params: { hash: this.hash },
    });
  }

  getHttp(targetUrl: string) {
    this.fetchStatus.next('sending');
    return this.http.get(`${this.baseUrl}/${targetUrl}`, {
      headers: {
        'Content-type': 'application/json',
        'x-api-key': this.apiKeys,
      },
    });
  }
}
