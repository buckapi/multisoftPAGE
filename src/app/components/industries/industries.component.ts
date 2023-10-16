import { Component, OnInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';
@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit {

  constructor(
    public yeoman: Yeoman,
    public dataApiService: DataApiService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
