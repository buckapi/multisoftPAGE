import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories:any;
  
  constructor(
    public router: Router,
    public yeoman: Yeoman,
    public dataApiService: DataApiService
    ) { 
      this.loadCategories();
    }
    setCategory(i:any){
      let indice= i;
      this.dataApiService.getAllCategory().subscribe(
       response => {
         this.categories = response;}
       )
     }   
    /*  loadCategories(){
       this.dataApiService.getAllCategory().subscribe(
         response => {
           this.categories = response;
           console.log("Categorías cargadas:", this.categories);
         },
         error => {
           console.error("Error al cargar las categorías:", error);
         }
       );
     } */
     loadCategories() {
      this.dataApiService.getAllCategory().subscribe(
        (response: any) => { // Asegúrate de que response sea del tipo correcto
          this.categories = response;
    
          // Ordena las categorías por la propiedad 'name'
          this.categories.sort((a: any, b: any) => a.name.localeCompare(b.name));
    
          console.log("Categorías cargadas y ordenadas:", this.categories);
        },
        error => {
          console.error("Error al cargar las categorías:", error);
        }
      );
    }
    
      setPreview(i:any){
       this.yeoman.preview=this.yeoman.allrubro[i];
       this.router.navigate(['industries']);
     }
    
  ngOnInit(): void {
  }

}
