import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from '../../services/api-service.service';


@Component({
  selector: 'garages-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './garages-view.component.html',
  styleUrl: './garages-view.component.css'
})
export class GaragesViewComponent implements OnInit {
  @Input() garagesList: any;

  ngOnInit() {
  }


}
