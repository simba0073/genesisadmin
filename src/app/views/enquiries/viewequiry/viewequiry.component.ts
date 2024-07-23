import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvatarComponent, BadgeModule, ButtonDirective, ButtonGroupComponent, CardBodyComponent, CardComponent, CardFooterComponent, CardHeaderComponent, ColComponent, FormCheckLabelDirective, GutterDirective, ProgressBarDirective, ProgressComponent, RowComponent, TableDirective, TextColorDirective } from '@coreui/angular';
import { AppService } from '../app.service';
import { NgStyle } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { IconDirective } from '@coreui/icons-angular';
import { WidgetsBrandComponent } from '../../widgets/widgets-brand/widgets-brand.component';
import { WidgetsDropdownComponent } from '../../widgets/widgets-dropdown/widgets-dropdown.component';

@Component({
  selector: 'app-viewequiry',
  standalone: true,
  imports: [WidgetsDropdownComponent, BadgeModule, TextColorDirective, CardComponent, CardBodyComponent, RowComponent, ColComponent, ButtonDirective, IconDirective, ReactiveFormsModule, ButtonGroupComponent, FormCheckLabelDirective, ChartjsComponent, NgStyle, CardFooterComponent, GutterDirective, ProgressBarDirective, ProgressComponent, WidgetsBrandComponent, CardHeaderComponent, TableDirective, AvatarComponent],
  templateUrl: './viewequiry.component.html',
  styleUrl: './viewequiry.component.scss'
})
export class ViewequiryComponent implements OnInit{


  enqData: any;
  enqViewData: any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private enqService: AppService){
      this.route.data.subscribe(data =>
        this.enqData = data['singleEnquiry']
      )
 
    }
  ngOnInit(): void {

  }

  deleteEnquiry(enquiryId: any) {
   this.enqService.deleteEnqById(enquiryId).subscribe(
   
   )
  }
  backEnquiry() {
    this.router.navigateByUrl(`/enquiries`)
   }
}
