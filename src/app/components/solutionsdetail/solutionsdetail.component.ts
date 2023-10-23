import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-solutionsdetail',
  templateUrl: './solutionsdetail.component.html',
  styleUrls: ['./solutionsdetail.component.css']
})
export class SolutionsdetailComponent implements OnInit {
  categories:any;
  products:any=[];
  product:any={};
  
  constructor(
    public yeoman: Yeoman,
    public dataApiService: DataApiService,
    public router: Router
  ) {
    this.product=this.product
    this.loadCategories();
    console.log("seted: "+JSON.stringify(this.yeoman.preview.name));
   }
   
  
  setCategory(i:any){
    let indice= i;
    this.dataApiService.getAllCategory().subscribe(
     response => {
       this.categories = response;}
     )
   }
 
   loadCategories(){
     this.dataApiService.getAllCategory().subscribe(
       response => {
         this.categories = response;
         console.log("Categorías cargadas:", this.categories);
       },
       error => {
         console.error("Error al cargar las categorías:", error);
       }
     );
   }
  
  ngOnInit(): void {
    
    window.scrollTo(0, 0);
  }
}
