import { Component } from '@angular/core';
import { GaragesFilterComponent } from '../../components/garages-filter/garages-filter.component';
import { GaragesViewComponent } from '../../components/garages-view/garages-view.component';
import { ApiService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-garages',
  standalone: true,
  imports: [GaragesFilterComponent, GaragesViewComponent, CommonModule],
  templateUrl: './garages.component.html',
  styleUrl: './garages.component.css'
})
export class GaragesComponent {
  isError: boolean = false;
  dataArray: any;
  objFilter: {} = {};
  isShowErrorAlert: boolean = false;
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.objFilter = { 'city': "" };
    this.loadgarages(this.objFilter);
  }

  loadgarages(objFilter: any) {
    this.isShowErrorAlert = false;
    this.apiService.getgarages(objFilter).subscribe({
      next: ((res: any) => {
        this.dataArray = res.Data.GaragesList;
        if (this.dataArray.length !== 0) {
          this.dataArray.sort((a: any, b: any) => a.Name.localeCompare(b.Name, 'he', { sensitivity: 'base' }));
        }
        else this.isShowErrorAlert = true;

      }),
      error: ((err: any) => {
        this.isError = true;
      }),
    });
  }

}
