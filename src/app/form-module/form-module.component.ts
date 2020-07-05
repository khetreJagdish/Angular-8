import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-module',
  templateUrl: './form-module.component.html',
  styleUrls: ['./form-module.component.scss']
})
export class FormModuleComponent implements OnInit {
  
  websitelist:any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com'];

  form= new FormGroup({
    website : new FormControl('',Validators.required)
  });

  get f(){
     return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }

  changeWebsite(e){
    console.log(e.target.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
