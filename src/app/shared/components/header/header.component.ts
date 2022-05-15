import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() newItemEvent :EventEmitter<any>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ToggleSideBar() {
    this.newItemEvent.emit();
    setTimeout(()=>{
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

}
