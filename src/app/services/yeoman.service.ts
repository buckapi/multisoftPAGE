import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Yeoman {
  view:string='grid';
  preview:any={};
  user:any;
  all:any=[];
  allProducts:any=[];
  existencias:any=[];
  existenciasSize:number=0;
  allCategoriesSize:number=0;
  allClientsSize:number=0;
  virtualRoute:any="dashboard";
  pop:Boolean=false;
  data:any={};
<<<<<<< HEAD
  products:any=[];
=======
  products:any={};
>>>>>>> b667d56670a9e001462b314e7931e26071f3ee26
  product:any=[];
  categories:any=[];
  category:any={};
  allcategory:any=[];
  clients:any=[];
  allclient:any=[];
  testimony:any=[];
  alltestimony:any=[];
  rubro:any=[];
  allrubro:any=[];
  currency:number=1;
  config: {
    clientSelected:number;
  } = {clientSelected:-1} ;
  origin: {
    name: string;
    restUrl: string;
    GQLUrl: string;
  } = {
    name: "default",
    restUrl: "https://db.buckapi.com:9023",
    GQLUrl: "<origin GQL url>",
  };
  constructor() {}
}
