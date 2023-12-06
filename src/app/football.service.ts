import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FootballService {
  private apiUrl = environment.apiendpoint;

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCurrentSeason(leagueId: any): Observable<any[]> {
    // Define headers
    debugger;
    const headers = new HttpHeaders({
      'x-rapidapi-host': environment.hostname,
      'x-rapidapi-key': environment.apiKey,
    });

    // Define query parameters
    const params = {
      league: leagueId,
      season: '2023',
    };

    // Add headers to the request
    const options = { headers: headers, params: params };

    return this.http.get<any[]>(this.apiUrl + '/standings', options);
  }

  getFixtures(leagueId: any): Observable<any[]> {
    // Define headers
    debugger;
    const headers = new HttpHeaders({
      'x-rapidapi-host': environment.hostname,
      'x-rapidapi-key': environment.apiKey,
    });

    // Define query parameters
    const params = {
      league: leagueId,
      season: '2023',
    };

    // Add headers to the request
    const options = { headers: headers, params: params };

    return this.http.get<any[]>(this.apiUrl + '/standings', options);
  }
}
