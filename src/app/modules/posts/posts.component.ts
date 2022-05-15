import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../dashboard.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  rating=0;
  ratingArr:boolean[]=[];

  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.ratingArr=Array(5).fill(false);//initialiser
  }

  ajouter(){
    this.dashboardService.x=this.dashboardService.x+20;
  }

  returnStar(i:number){
    if(this.rating>=i+1){
      return 'star';
    }else{
      return 'star_border';//icon rate empty
    }
  }

  onClick(i:number){
    this.rating=i+1;
  }

}
