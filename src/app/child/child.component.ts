import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  userName=''
  constructor() { }

  ngOnInit(): void {
  }

 changeColor(val:string){
   console.log( val );
   this.userName=val;
   
 }

}
