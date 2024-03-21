import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'garages-filter',
  standalone: true,
  imports: [HttpClientModule, MatFormFieldModule, CommonModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './garages-filter.component.html',
  styleUrl: './garages-filter.component.css',
  providers: [ApiService]
})
export class GaragesFilterComponent implements OnInit {
  constructor(private apiService: ApiService) {
  }

  @Output() filtergarages = new EventEmitter<any>();
  dataArray: any[] = [];
  city: any = "";

  ngOnInit() {
    this.getAreas();
  }

  getAreas() {
    this.apiService.getAreas().subscribe({
      next: ((res: any) => {
        if (res.Data) {
          this.dataArray  = Object.keys(res.Data).map(value => ({ value: parseInt(value), viewValue: res.Data[value] }));
        }
      }),
      error: ((err: any) => {
      }),
    });
  }

  onChangeArea(value: any) {
    debugger
    if (this.city) {
      var areaobj: {} = { 'City': this.city, 'Area':  this.dataArray[value].viewValue };
    }
    else {
      var areaobj: {} = { 'Area':  this.dataArray[value].viewValue };
    }
    this.filterbyCityOrArea(areaobj)
  }

  onChangeCity() {
    var cityobj: {} = { 'City': this.city }
    this.filterbyCityOrArea(cityobj);
  }

  filterbyCityOrArea(objFilter: any) {
    this.filtergarages.emit(objFilter);
  }
}
