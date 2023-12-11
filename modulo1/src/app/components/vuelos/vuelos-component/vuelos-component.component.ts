import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vuelos-component',
  templateUrl: './vuelos-component.component.html',
  styleUrls: ['./vuelos-component.component.css']
})
export class VuelosComponentComponent implements OnInit{
  
  id: any;

  constructor(private route: ActivatedRoute){
    route.params.subscribe(params => { this.id = params['id']; })
  }

  ngOnInit(): void {
    
  }

}
