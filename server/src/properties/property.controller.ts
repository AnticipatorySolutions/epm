import * as express from 'express';

import { PropertyService } from './property.service';

const propertyService = new PropertyService();

const controller = express.Router();

controller.put('/', async (req, res) => {
  const query = req.body;
  if(!query.name||!query.address||!query.floors||!query.unitsPerFloor){
	  res.send("Bad Data");
	  console.log("Bad Data");
  }else{
	console.log("Good Data");
	const jlr = await propertyService.addProperty(query.name,query.address,query.floors,query.unitsPerFloor);  
	const properties = await propertyService.listProperties(query, req.query.offset, req.query.limit);
	res.send(properties);
  }
 });
 
controller.post('/', async (req, res) => {
  const query = req.body;
  const properties = await propertyService.listProperties(query, req.query.offset, req.query.limit);
  res.send(properties);

 });
 
controller.get('/', async (req, res) => {
  const query = req.body;
  console.log("get");
  const properties = await propertyService.listProperties(query, req.query.offset, req.query.limit);
  res.send(properties);
});

 
export { controller as PropertyController };
