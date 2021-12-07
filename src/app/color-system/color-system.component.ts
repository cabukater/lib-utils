import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ColorService } from 'shared-angular-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-system',
  templateUrl: './color-system.component.html',
  styleUrls: ['./color-system.component.scss']
})
export class ColorSystemComponent {

  theme = "";
  codeStart=`theme = localStorage.getItem('colorSelected');`;
  moduleInsert= `import { ColorModule } from 'shared-angular-components'; `;
  codeModule= `  imports: [
    ...
    ColorModule,
    ...
  ],`;
  codeVar= `theme = localStorage.getItem('colorSelected');`
  directive= `  <shared-color  [name]="theme"  (themeColor)="selectTheme($event)">    
  </shared-color>`
  showClass='[ngClass]="theme"';
  htmlFull=`<div class="d-flex flex-column bd-highlight mb-0" [ngClass]="theme">
  <header>
    <nav class="navbar navbar-expand-lg  py-3 main-nav">
      <div class="container">
        <a class="navbar-brand" href="#l"><img src="./assets/shared-negative.png" alt="Logo" class="logo"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link text-uppercase  text-light" href="#">  {{theme}} <span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </div>
      <shared-color 
      [name]="theme"
      (themeColor)="selectTheme($event)">    
      </shared-color>
    </nav>
  </header>
</div>
<div class="d-flex flex-row adjust-height" [ngClass]="theme">
  <div class="flex-grow-1 mb-5 ">
    <!--[ngClass]="colorService.colorTheme"-->
    <div class="d-flex flex-column bd-highlight adjust-height stage " [ngClass]="theme">
      <div class="pt-3">
        <div class="container" [ngClass]="theme">
          <router-outlet></router-outlet>
        </div>
        <div class="mt-auto" [ngClass]="theme">
          <footer class="footer">
            <div class="container">
              <span class=" text-light">shared - 2020</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>`
  constructor(
    private router: Router,
    public colorService: ColorService,
  ) { }
   
  selectTheme(themeColor) {
     console.log(themeColor);
     this.router.navigate(['/color-system']);   
   }
}
