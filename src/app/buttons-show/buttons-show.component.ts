import { Component, OnInit } from '@angular/core';
import { ToastService } from 'shared-angular-components';

@Component({
  selector: 'app-buttons-show',
  templateUrl: './buttons-show.component.html',
  styleUrls: ['./buttons-show.component.scss']
})
export class ButtonsShowComponent {

  icon;
  buttonType;
  secondarInput;
  
  texto = 'teste';
  importModule = `import { ButtonsModule } from 'shared-angular-components'; `
  codeModule = `  imports: [   ..
    ButtonsModule,
   ...
  ],`
  codeButtonTeste = ` <shared-button 
      [textButton]="'Topo'"
       <= texto do botão (recebe string entre  '' ou variavel do tipo string )
      ******
      [type]="'change'"
       <= tipo do botão  (recebe string entre  '' ou variavel do tipo string ) )
       ******
      
       <= Exibe icone  (neste caso se não houver basta não declarar, recebe string entre  '' ou variavel do tipo string ))
       ******
      [size]="'md'" 
      <= Tamanho do Botão  (declare o tipo conforme sua necessidade string)
      ******
      [tooltip]="'texto do Toltip no topo'" 
       <= texto do Tootlip  (neste caso se não houver basta não declarar, recebe string entre  '' ou variavel do tipo string ))
       ******
      [posTooltip]="'top'"
       <= Onde aparecerá o tooltip (em caso de não haver tooltip não precisa declarar, recebe string entre  '' ou variavel do tipo string )
      >
  </shared-button>  `;
  codeHtml = ` <shared-button 
            [textButton]="'Topo'" 
            [tooltip]="'texto do Toltip no topo'" 
            [type]="'change'" 
            [posTooltip]="'top'" 
             
            [size]="'md'"
            [outline]="true"
            [secomdary]="true"
            (click)="functionComponent()" >
           </shared-button>  `;
  showIconInput = `[showIcon]`;
  smInput = `[size]="'sm'`;
  mdInput = `[size]="'md'`;
  lgInput = `[size]="'lg'`;
  outlineInput = `[outline]="true"`;
  textInput = ` [textButton]="'texto'"`;
  tooltipInput = `[tooltip]="'texto do Toltip no topo'" [posTooltip]="'top'" `;
  typeInput = `[type]="'tipo do botão copiado'"`
  sizeLg = `[size]="'lg'"`
  sizeMd = `[size]="'md'"`
  sizeSm = `[size]="'sm'"`
  typesuccess = `[type]="'success'"`
  typeDanger = `[type]="'danger'"`
  typeInfo = `[type]="'info'"`
  typeAction = `[type]="'action'"`
  typeWarning = `[type]="'warning'"`
  typeCancel = `[type]="'cancel'"`
  typeRemove = `[type]="'remove'"`
  typeAdd = `[type]="'add'"`
  typeQuestion = `[type]="'question'"`
  typeChange = `[type]="'change'"`
  typeBack = `[type]="'back'"`
  typeHome = `[type]="'home'"`
  typeNext = `[type]="'next'"`
  typeOut = `[type]="'out'"`
  typeDate = `[type]="'date'"`
  typeCalendar = `[type]="'date'"`
  typeCopy = `[type]="'copy'"`
  typeClosed = `[type]="'closed'"`
  tooltipTop = `[posTooltip]="'top'"`
  tooltipBottom = `[posTooltip]="'bottom'"`
  tooltipLeft = `[posTooltip]="'left'"`
  tooltipRight = `[posTooltip]="'right"`
  secondaryInput = `[secondary]="true"`
  fab =`[fab]=true`
  rounded =`[rounded]=true`
  constructor(private toastServ: ToastService ) { }

    scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  alertCopy() {
    this.toastServ.show({
      text: 'Chave copiada com sucesso',
      type: "success"
    })
  }
}
