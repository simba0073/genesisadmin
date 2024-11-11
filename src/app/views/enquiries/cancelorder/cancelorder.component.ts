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
  selector: 'app-cancelorder',
  standalone: true,
  imports: [WidgetsDropdownComponent, TextColorDirective, CardComponent, CardBodyComponent, RowComponent, ColComponent, ButtonDirective, IconDirective, ReactiveFormsModule, ButtonGroupComponent, FormCheckLabelDirective, ChartjsComponent, NgStyle, CardFooterComponent, GutterDirective, ProgressBarDirective, ProgressComponent, WidgetsBrandComponent, CardHeaderComponent, TableDirective, AvatarComponent],
  templateUrl: './cancelorder.component.html',
  styleUrl: './cancelorder.component.scss'
})
export class CancelorderComponent implements OnInit{

  cancelForm: FormGroup;

  constructor(private appService:  AppService,
              private formBuilder: FormBuilder,
  ){}
  
  ngOnInit(): void {
      this.createFormGroup()
  }

  createFormGroup() {
     this.cancelForm = this.formBuilder.group({
      'traceNumber': [''],
      'statement': ['']
     })
  }

  submit() {
    const cancelFormData = this.cancelForm.value;
    const traceNumber = this.cancelForm.value.traceNumber;
    this.appService.cancelOrder(cancelFormData, traceNumber).subscribe((reponse: any) => {

    })
  }
}
