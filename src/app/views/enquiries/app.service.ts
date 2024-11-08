
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
providedIn: 'root',
})
export class AppService {
private apiUrl = 'https://sandbox.flocash.com/rest/v2/orders?fromDate=01/01/2001';

constructor(private http: HttpClient) {}


 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('kirosdawitbox8:kirosdawitbox8')
    })
  };

getAllEnquiries(): Observable<any> {
return this.http.get(this.apiUrl, this.httpOptions);
}

getEnquiryByID(enquiryId: any): Observable<any> {
    return this.http.get(`https://fsboafrica.com/api/enquiries/get-single/${enquiryId}`);
}

deleteEnqById(enquiryId: any): Observable<any> {
    return this.http.delete(`https://fsboafrica.com/api/enquiries/delete/${enquiryId}`)
}
}