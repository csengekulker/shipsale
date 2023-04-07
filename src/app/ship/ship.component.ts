import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {

  constructor(private api: ApiService) { }
  ships!:any

  fetchAllShips() {
    this.api.fetchAllShips().subscribe({
      next: (data:any) => {
        console.log(data);
        this.ships = data
        
      },
      error: (e) => {
        console.log(e);
        
      }
    })
  }

  ngOnInit(): void {
    this.fetchAllShips()
  }

}
