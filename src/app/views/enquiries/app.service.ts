
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root',
})
export class AppService {
private apiUrl = 'https://fsboafrica.com/api/enquiries/all';

constructor(private http: HttpClient) {}

getAllEnquiries(): Observable<any> {
return this.http.get(this.apiUrl);
}

getEnquiryByID(enquiryId: any): Observable<any> {
    return this.http.get(`https://fsboafrica.com/api/enquiries/get-single/${enquiryId}`);
}

deleteEnqById(enquiryId: any): Observable<any> {
    return this.http.delete(`https://fsboafrica.com/api/enquiries/delete/${enquiryId}`)
}
}