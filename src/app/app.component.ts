import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GaragesComponent } from './pages/garages/garages.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ApiService } from './services/api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GaragesComponent, LoaderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[ApiService]
})
export class AppComponent implements OnInit {
  showSpinner: boolean = false;
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.showSpinner.subscribe((value: boolean) => {
      this.showSpinner = value;

    });
  }

}
