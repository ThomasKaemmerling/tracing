import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  data: any;

  constructor(private dataService:DataService) {
  }

  async ngOnInit() {
    const quotes = await this.dataService.receiveMachineQuotes();
    this.data = {
      labels:['Quote OK Parts'],
      datasets:[]
    }
    for(const prop in quotes){
      this.data.datasets.push({label:prop,data:[Number((quotes as any)[prop])]})
    }
    alert(JSON.stringify(this.data))
  }

}
