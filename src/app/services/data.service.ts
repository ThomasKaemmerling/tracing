import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private httpClient:HttpClient) { }

public receiveMachineQuotes(){
 return this.httpClient.get('https://tracedatareceiver20221103164225.azurewebsites.net/api/MachineQuote?code=DiJH6CD8xmbbfhCRZFmUnyWA2WrTlTuTT0SMCWrYiTp2AzFuyOc92A==').toPromise();
}

}
