import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

export interface TableElement {
  id: string;
  name: string;
  email: string;
  website: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public data: TableElement[];

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service.getUser().subscribe(
      res => {
        this.data=res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
