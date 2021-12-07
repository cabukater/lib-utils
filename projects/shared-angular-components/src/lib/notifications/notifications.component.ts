import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
 @Input() items: any[];
 @Input() typeItem;
 theme = localStorage.getItem('colorSelected');
 showNote : boolean;
@Input() total;
  constructor() { }

  ngOnInit() { }

  
  openNote(){
    this.showNote = !this.showNote
  }
}

 
