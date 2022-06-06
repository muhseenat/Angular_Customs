import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  filteredString:string='';
  members=['rono','messi','hazard','ozil']


  @ViewChild(ChildComponent)  child:ChildComponent

ngOnInit(): void {
  
}


callChild(val:string){
  this.child.changeColor(val)
}


}
