import { Component, OnInit } from '@angular/core';
import { AreaService } from './area.service';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
  providers: [AreaService]
})
//Graph
export class AreaComponent implements OnInit {

  chartOptions: {};
  gridsizes = [];
  Linechart = [];
  url = 'api/authorBooks/graph';
  constructor(private httpClient: HttpClient) { }
  /**
   * Http request is called for Graph Calculation.
   */
  ngOnInit() {
    this.httpClient.get(this.url).subscribe((result: number[]) => {
      result.forEach(x => {
        this.gridsizes.push(x);
    });
      this.Linechart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: ["Author1", "Author2", "Author3", "Author4", "Author5", "Author6"],
          datasets: [
            {
              data: this.gridsizes,
              borderColor: '#3cb371',
              backgroundColor: "#0000FF",
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }
}
