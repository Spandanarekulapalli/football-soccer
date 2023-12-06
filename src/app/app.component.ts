import { Component, OnInit } from '@angular/core';
import { FootballService } from './football.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'football';
  teams = [];

  constructor(private footbal: FootballService) {}

  ngOnInit(): void {}

  getCurrentSeason(leagueId: number) {
    // alert(leagueName)
    this.footbal.getCurrentSeason(leagueId).subscribe(
      (data: any) => {
        // Handle the response data
        this.teams = data.response[0].league.standings;
        console.log(this.teams);
      },
      (error) => {
        // Handle errors
        console.error('Error fetching data:', error);
      }
    );
  }
}
