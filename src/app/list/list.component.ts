import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

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
