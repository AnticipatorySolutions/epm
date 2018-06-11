import { PropertyDAO } from './property.dao';
import { Property } from './property.model';
import { Unit } from './property.model';

import * as _ from 'lodash';


export class PropertyService {

  constructor(
    private dao = new PropertyDAO()
  ) { }

  public listProperties(
    query: any = {},
    offset: number = 0,
    limit: number = 10
  ): Promise<Property[]> {
    return this.dao.query(query, offset, limit);
  }

  public addProperty(
	name: string,
	address: string,
	floors: number,
	unitsPerFloor: number,
  ):Promise<string>{
	let property = genProperty(name,address,floors,unitsPerFloor);
	return this.dao.insert(property);
  }  
}

function genProperty(name:string, address:string, floors:number, unitsPerFloor:number){
	const property = {
		name: name,
		address: address,
		units : new Array<Unit>()		
	};
	addUnits(property,floors,unitsPerFloor);
	return property;
}


function addUnits(property: Property, floors: number, unitsPerFloor: number) {
  for (let floor = 1; floor <= floors; floor++) {
    for (let unitNo = 0; unitNo < unitsPerFloor; unitNo++) {
      const doorNo = unitNo <= 9 ? `${floor}0${unitNo}` : `${floor}${unitNo}`
      property.units.push({
        number: doorNo,
        floor: floor,
        rent: _.random(850, 2550, false),
		vacant: true		
      } as Unit)
    }
  }
}
