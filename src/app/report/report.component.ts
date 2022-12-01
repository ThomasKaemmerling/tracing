import { DataService } from './../services/data.service';
import { Component, OnInit, Query } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  async ngOnInit() {
    const quotes = await this.dataService.receiveMachineQuotes();
    this.data = {
      labels: ['Quote OK Parts'],
      datasets: [],
    };
    for (const prop in quotes) {
      const quote = Number((quotes as any)[prop]);
      this.data.datasets.push({
        label: prop,
        backgroundColor: this.getBarColor(quote),
        data: [quote],
      });
    }
  }

  private getBarColor(quote: number) {
    if (quote < 90)
      return 'red';
    if (quote < 95)
      return '#FFCA28'; // yellow

    return '#66BB6A'; // green
  }
}
