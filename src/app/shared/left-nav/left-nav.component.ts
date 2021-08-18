import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gotoModule(moduleName: string){
    if(moduleName === 'todos'){
      window.location.href = `${environment}/todos`
    } else if(moduleName === 'tasks'){
      window.location.href = `${environment}/tasks`
    }
  }

}
