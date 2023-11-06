import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';
import { Detail } from '@services/detail.service';
import { Filter } from '@app/services/filters.service';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit ,AfterViewInit{

  allModules: any;
  localDetail: any = [];
  constructor(
    public filter: Filter,
    public infoDetail: Detail,
    public yeoman: Yeoman,
    public dataApiService: DataApiService
  ) {

    // console.log("lo que viene: ",this.filter.idCategorySelected)
    this.getAllRubro();
  
  }
  getAllRubro() {
    this.dataApiService.getAllRubro().subscribe(response => {
      this.yeoman.allrubro = response;
    });
  }

  loadModules() {
    console.log("id a evaluar : " + this.filter.idCategorySelected)
    this.dataApiService.getAllModules().subscribe(
      (response: any) => {
        this.yeoman.allModules = response;
        const filteredModules = [];
        for (const module of this.yeoman.allModules) {
          for (const category of module.categories) {
            if (category.id === this.filter.idCategorySelected) {
              this.yeoman.filteredModules.push(module);
              break; // Si se encuentra una coincidencia, no es necesario seguir comprobando
            }
          }
        }
      });


  }

  ngAfterViewInit(): void {

    console.log("lo que viene: ",this.filter.idCategorySelected)
     this.loadModules();
  }
  ngOnInit(): void {
    // console.log("lo que viene: ", JSON.stringify(this.localDetail.info))
    window.scrollTo(0, 0);
  }
  


}
