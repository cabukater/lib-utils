import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {SidemenuService} from './sidemenu.service'



@Component({
  selector: 'shared-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  @Input() openMenu;
  oneAtATime: boolean = true;

  constructor(
    private sidemenuService: SidemenuService,

  ) { }

  ngOnInit() {
    this.checkOpen();
    this.startMenu();
    this.teste();
 
  }


 teste(){
    this.sidemenuService.teste();
  }

 startMenu() {
    const dropdown = document.getElementsByClassName('dropdown-btn');
    let i: number;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', function () {
        this.classList.toggle('active');
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
      });
    }
  }

  checkOpen() {
    if (this.openMenu === null) {
      this.openMenu = true;
    } if (this.openMenu === true) {
      this.openMenu = true;
    } else {
      this.openMenu = true;
    }
  }

}
