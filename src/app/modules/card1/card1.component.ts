import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component implements OnInit {

  rating=0;
  ratingArr:boolean[]=[];
  url:any;

  constructor() { 
    this.url="./../../../assets/imgs/img2.jpg";
  }

  ngOnInit(): void {
    this.ratingArr=Array(5).fill(false);//initialiser
  }
  changImage(event:any){
    this.url=event.target.src
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
