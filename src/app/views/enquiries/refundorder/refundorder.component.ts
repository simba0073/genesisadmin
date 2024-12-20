import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextColorDirective, CardComponent, CardBodyComponent, RowComponent, ColComponent, ButtonDirective, ButtonGroupComponent, FormCheckLabelDirective, CardFooterComponent, GutterDirective, ProgressBarDirective, ProgressComponent, CardHeaderComponent, TableDirective, AvatarComponent } from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { IconDirective } from '@coreui/icons-angular';
import { WidgetsBrandComponent } from '../../widgets/widgets-brand/widgets-brand.component';
import { WidgetsDropdownComponent } from '../../widgets/widgets-dropdown/widgets-dropdown.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-refundorder',
  standalone: true,
  imports: [WidgetsDropdownComponent, TextColorDirective, CardComponent, CardBodyComponent, RowComponent, ColComponent, ButtonDirective, IconDirective, ReactiveFormsModule, ButtonGroupComponent, FormCheckLabelDirective, ChartjsComponent, NgStyle, CardFooterComponent, GutterDirective, ProgressBarDirective, ProgressComponent, WidgetsBrandComponent, CardHeaderComponent, TableDirective, AvatarComponent],
  templateUrl: './refundorder.component.html',
  styleUrl: './refundorder.component.scss'
})
export class RefundorderComponent implements OnInit {


   refundForm: FormGroup;
  constructor(private appService: AppService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createFormGroup()
  }


  createFormGroup() {
    this.refundForm = this.formBuilder.group({
      'traceNumber': [''],
      'Currency': [''],
      'Amount': [''],
      'Statement': ['']
    })
  }

  submit() {
    const cancelFormData = this.refundForm.value;
    const traceNumber = this.refundForm.value.traceNumber;
    this.appService.postRefunds(cancelFormData, traceNumber).subscribe((reponse: any) => {
    })
  }
}
