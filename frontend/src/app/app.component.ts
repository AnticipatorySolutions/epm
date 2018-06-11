import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm, FormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Unit, Property, PropertyService,  } from './api/client/properties/property.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  public searchString:string;
  
  title = 'Change to frontend src app';
  
  properties: Property[] = [];  
  
  propertySelected:any=false;
  activeProperty: Property;
  
  
  constructor(
    private propertyService: PropertyService
  ) { }

  ngOnInit(): void {
    this.loadProperties();
	this.activeProperty = this.properties[0];
  }
  
  addProperty(f: NgForm){
	  this.propertyService.addProperty(f)
	  .subscribe(
		  (val) => {},
		  response => {},
		  ()=>{}
		);
  }

  updateUnit(event,unit:Unit){
	  unit.vacant = !unit.vacant;
  }
  
  
  loadProperties() {
    this.propertyService.queryProperties()
      .subscribe(properties => {
        this.properties = properties;
      });
  }
	
  propertySelect(event,property:Property){
	  this.setActiveProperty(property);	  
  }
  
  setActiveProperty(property:Property){
	  this.propertySelected = true;
	  this.activeProperty = property;
  }
	
}
