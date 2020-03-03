import { HttpClient } from '@angular/common/http';
	import { Injectable } from '@angular/core';
	import { Observable } from 'rxjs';
	import { environment } from 'src/environments/environment';
	import { CoreModule } from '../core.module';
	
	@Injectable({
	  providedIn: CoreModule,
	})
	export class ApiService {
	  constructor(private http: HttpClient) {}
	
	  /**
	   * Requests with `DELETE` HTTP method using the app environment's `api` url
	   * @param resource Resource endpoint to call
	   */
	  delete<T>(
	    resource: string,
	    params?: { [param: string]: string | string[] }
	  ): Observable<T> {
	    return this.http.delete<T>(this.getUrl(resource), { params });
	  }
	
	  /**
	   * Requests with `GET` HTTP method using the app environment's `api` url
	   * @param resource Resource endpoint to call
	   */
	  get<T>(
	    resource: string,
	    params?: { [param: string]: string | string[] }
	  ): Observable<T> {
	    return this.http.get<T>(this.getUrl(resource), { params });
	  }
	
	  /**
	   * Requests with `POST` HTTP method using the app environment's `api` url
	   * @param resource Resource endpoint to call
	   * @param data Data to send
	   */
	  post<T>(
	    resource: string,
	    data: T,
	    params?: { [param: string]: string | string[] }
	  ): Observable<T> {
	    return this.http.post<T>(this.getUrl(resource), data, { params });
	  }
	
	  /**
	   * Requests with `PUT` HTTP method using the app environment's `api` url
	   * @param resource Resource endpoint to call
	   * @param data Data to send
	   */
	  put<T>(
	    resource: string,
	    data: T,
	    params?: { [param: string]: string | string[] }
	  ): Observable<T> {
	    return this.http.put<T>(this.getUrl(resource), data, { params });
	  }
	
	  /**
	   * Requests with `POST` or `PUT` HTTP method, depending on `data` and `key` passed, using the app environment's `api` url
	   * @param resource Resource endpoint to call
	   * @param data Data to send
	   * @param keyFn Function that returns the data's key, truey for `PUT` or falsey for `POST`
	   */
	  save<T>(
	    resource: string,
	    data: T,
	    keyFn: (t: T) => string | number | boolean,
	    params?: { [param: string]: string | string[] }
	  ): Observable<T> {
	    if (keyFn(data)) {
	      return this.put(resource, data, params);
	    }
	
	    return this.post(resource, data, params);
	  }
	
	  /**
	   * Gets the full API url for a specified resource
	   */
	  private getUrl(resource: string): string {
	    return `${environment.api}/${resource}`.replace(/\b\/\//g, '/');
	  }
	}

