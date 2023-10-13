import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';
@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})

export class SolutionsComponent implements OnInit {
  categories:any;
  clients:any;
  constructor(
    public router: Router,
    public yeoman:Yeoman,
    public dataApiService: DataApiService
  ) { 
    this.loadCategories();
    // this.getAll();
    this.getAllProducts();
  }
  getAllProducts(){
    
    this.dataApiService.getAllProducts().subscribe(response=>{
      this.yeoman.allProducts=response;
    
      
    });
  }
  
  setClient(i:any){
    let indice= i;
    this.dataApiService.getAllClient().subscribe(
     response => {
       this.clients = response;}
     )
   }
  //  getAll(){
 
  //   this.dataApiService.getAllClient().subscribe(response=> {
  //     this.yeoman.allclient=response;
   
  //   });
  // }
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
   setPreview(i:any){
    /* this.yeoman.preview=this.yeoman.all[i]; */
    this.yeoman.preview=this.yeoman.allProducts[i];
    // console.log("seted: "+this.yeoman.preview.name);
    this.router.navigate(['solutionsdetail']);
  }


  ngOnInit(): void {
  }

}
