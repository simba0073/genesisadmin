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
  selector: 'app-createorder',
  standalone: true,
  imports: [WidgetsDropdownComponent, TextColorDirective, CardComponent, CardBodyComponent, RowComponent, ColComponent, ButtonDirective, IconDirective, ReactiveFormsModule, ButtonGroupComponent, FormCheckLabelDirective, ChartjsComponent, NgStyle, CardFooterComponent, GutterDirective, ProgressBarDirective, ProgressComponent, WidgetsBrandComponent, CardHeaderComponent, TableDirective, AvatarComponent],
  templateUrl: './createorder.component.html',
  styleUrl: './createorder.component.scss'
})
export class CreateorderComponent implements OnInit{

  orderForm: FormGroup;
  merchantForm: FormGroup;
  payerForm:  FormGroup;
  payoptionForm: FormGroup;
  cardInforForm: FormGroup;


  constructor(private appService:  AppService,
              private formBuilder: FormBuilder,
  ){}
  
  ngOnInit(): void {
    this.orderFormGroup();
    this.merchantFormGroup();
    this.payerFormGroup();
    this.payoptionFormGroup();
    this.cardInforFormGroup();
  }


  orderFormGroup() {
    this.orderForm = this.formBuilder.group({
      'Amount': [''],
      'Currency': [''],
      'orderId': [''],
      'item_name': [''],
      'item_price': [''],
      'Quantity': ['']
    })
  }

  merchantFormGroup(){
    this.merchantForm = this.formBuilder.group({
      'merchantAccount': [''],
    })
  }

  payerFormGroup(){
    this.payerForm = this.formBuilder.group({
     'Country': [''],
      'firstName': [''],
      'lastName': [''],
      'Email': [''],
      'Mobile': [''],
    })
  }

  payoptionFormGroup(){
    this.payoptionForm = this.formBuilder.group({
      'id': ['']
    })
  }

  cardInforFormGroup(){
    this.cardInforForm = this.formBuilder.group({
      'cardholder': [''],
      'cardNumber': [''],
      'expireMonth': [''],
      'expireYear': [''],
      'cvv': ['']
    })
  }

  

  submit() {
    const orderFormData = this.order();
    const merchantFormData = this.merchant();
    const payerFormData = this.payer();
    const payOptionFormData = this.payoption();
    const cardInfoFormData = this.cardinfo();
    const data = {
      ...orderFormData,
      ...merchantFormData,
      ...payerFormData,
      ...payOptionFormData,
      ...cardInfoFormData
    }
    this.appService.createOder(data).subscribe((reponse: any) => {
    })
  }

  order(){
    return {order: this.orderForm.value}
  }

  merchant(){
    return {merchant: this.merchantForm.value}
  }

  payer(){
    return {payer: this.payerForm.value}
  }

  payoption(){
    return {payOption: this.payoptionForm.value}
  }

  cardinfo(){
    return {cardInfo: this.cardInforForm.value}
  }

}
