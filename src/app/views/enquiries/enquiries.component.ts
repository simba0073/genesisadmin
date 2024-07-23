import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service'
import { NgStyle } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextColorDirective, CardComponent, CardBodyComponent, RowComponent, ColComponent, ButtonDirective, ButtonGroupComponent, FormCheckLabelDirective, CardFooterComponent, GutterDirective, ProgressBarDirective, ProgressComponent, CardHeaderComponent, TableDirective, AvatarComponent } from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { IconDirective } from '@coreui/icons-angular';
import { WidgetsBrandComponent } from '../widgets/widgets-brand/widgets-brand.component';
import { WidgetsDropdownComponent } from '../widgets/widgets-dropdown/widgets-dropdown.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiries',
  standalone: true,
  imports: [WidgetsDropdownComponent, TextColorDirective, CardComponent, CardBodyComponent, RowComponent, ColComponent, ButtonDirective, IconDirective, ReactiveFormsModule, ButtonGroupComponent, FormCheckLabelDirective, ChartjsComponent, NgStyle, CardFooterComponent, GutterDirective, ProgressBarDirective, ProgressComponent, WidgetsBrandComponent, CardHeaderComponent, TableDirective, AvatarComponent],
  templateUrl: './enquiries.component.html',
  styleUrl: './enquiries.component.scss'
})
export class EnquiriesComponent implements OnInit{

  enqData: any;
  dateformat = 'ddMMMMyyy';

  constructor(private enqService: AppService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.getEnquiries();
  }

 private getEnquiries(){
  this.enqService.getAllEnquiries().subscribe((respdata: any)=>
    this.enqData = respdata.data
  )
 }

 routeEnquiry(enquiryId: any){
   this.router.navigateByUrl(`/view/${enquiryId}`)
 }
}
