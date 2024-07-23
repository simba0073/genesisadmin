import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import {AppService} from "../app.service"
import { Observable } from "rxjs";

@Injectable()
export class SingleEnquiryResolver implements Resolve<Object> {

    constructor(private enqService: AppService,
      ){}

      resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const enquiryId = route.paramMap.get('enquiryId');
        return this.enqService.getEnquiryByID(enquiryId)
    }
}