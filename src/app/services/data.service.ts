import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private httpClient:HttpClient) { }

public receiveMachineQuotes(){
 return this.httpClient.get('https://tracedatareceiver20221103164225.azurewebsites.net/api/Function1?code=meK_e66C5mb5X8yqJP3cxIBsvgVCHO7o9Y_KvQ9dN11FAzFunwmtTQ==').toPromise();
}

}
