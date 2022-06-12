import { Component } from '@angular/core';  
  
@Component({  
  selector: 'app-parent',  
  templateUrl: './parent.component.html',  
  styleUrls: ['./parent.component.css']  
})  
export class ParentComponent {  

  aaa=[{name:'sachin',age:30},{name:'sachin1',age:31},{name:'sachin2',age:32}];
  name: string | undefined;  
  message: any;  
  sendToChild: string | undefined;  
  
  getResponse($event: any) {  
    this.message = $event;  
  }  
  submit() {  
    this.sendToChild = this.name;  
  }  
} 