import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.scss']
})
export class ProjectpageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ){

  }
  ngOnInit(){

  }

}
