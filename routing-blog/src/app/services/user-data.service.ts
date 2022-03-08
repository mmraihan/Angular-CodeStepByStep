import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  url="https://localhost:44332/api/PaymentDetails";

  constructor(private http: HttpClient) { }
  users()
  {
    return this.http.get(this.url)
  }

 saveUser(data: any){
   return this.http.post(this.url, data)
 }

}
