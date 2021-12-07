import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { TableService } from './table.service';
@Component({
  selector: 'app-table',
  templateUrl: './table-show.component.html',
  styleUrls: ['./table-show.component.scss']
})
export class TableShowComponent implements OnInit {
  titleTable = "Tabela de Exemplo"
  configUrl: 'http://localhost:3000/paginationResponse/elementos';
  dataItems: any;
  codeModule = `  imports: [TableModule]`;
  codeImport = `import { TableModule} from 'shared-angular-components';`;
  codeDirectiveHtml = `<shared-table [tableData]="dataItems.elementos" 
  [align]="align" 
  [columnHeader]="columnHeader1" > </shared-table>`;
  htmlHeader = `[columnHeader]="columnHeader1"`;
  codeHeaderTS = `columnHeader1 = {'NomeData': 'Nome da Coluna','quantidade': 'Quantidade', ... };`
  columnHeader1 = { 'investidor': 'Investidor', 'quantidade': 'Quantidade', 'ativo': 'Ativo', 'emissor': 'Emissor', 'depositaria': 'Depositaria', 'cpfCnpjFormatado': 'CPF/CNPJ' };
  align = { 'quantidade': 'text-right' };
  codeAlign = `  align = { 'quantidade': 'text-right' };`
  codeDataTable = `[tableData]="dataItems.elementos"`
  codeGetData = `  getItems() {
    this.service.getFiles().subscribe(
      (data: any) => {
        this.dataItems = data
      }
    )
  }`;
  codeFullTs = `import { Component, OnInit } from '@angular/core';
  import { TestBed } from '@angular/core/testing';
  import { HttpClient } from '@angular/common/http';
  import { TableService } from './table.service';
  @Component({
    selector: 'app-table',
    templateUrl: './table-show.component.html',
    styleUrls: ['./table-show.component.scss']
  })
  export class TableShowComponent implements OnInit {
    titleTable = "Tabela de Exemplo"
    configUrl: 'http://localhost:3000/paginationResponse/elementos'; <= endpoint dos dados
    columnHeader1 = { 'investidor': 'Investidor', 'quantidade': 'Quantidade',
     'ativo': 'Ativo', 'emissor': 'Emissor', 'depositaria': 'Depositaria', 
    'cpfCnpjFormatado': 'CPF/CNPJ' }; <= define as colunas que deseja exibir
    align = { 'quantidade': 'text-right' }; <= selecione o alinhamento conforme a coluna desejada
    dataItems: any;
    constructor(
      private service: TableService,
      private http: HttpClient) { }
    ngOnInit() {
      this.getItems();
    }
    getItems() {
      this.service.getFiles().subscribe(
        (data: any) => {
          this.dataItems = data
        }
      )
    }
  }
  `
  codeCSS = `td.mat-cell.cdk-column-quantidade.mat-column-quantidade.ng-star-inserted {
    text-align: right;
}`
  dataSource = {
    "paginationResponse": {
      "total": 128310,
      "pagina": 1,
      "elementos": [
        {
          "investidor": "Jhon Doe",
          "investidorId": 5053951,
          "naturezaInvestidorBvmf": null,
          "naturezaInvestidorBvmfDescricao": "",
          "ativo": "Lorem Ipsum Text Blocks",
          "ativoId": 5001618,
          "depositaria": "Depositaria",
          "isin": null,
          "cpfCnpj": "18289001000163",
          "codigoAtivoCETIP": null,
          "quantidade": 1800987.00000000,
          "quantidadeBloqueada": 0,
          "emissor": "Capitalise each word",
          "emissorId": 5000805,
          "administradorId": null,
          "endereco": {
            "id": 5106847,
            "logradouro": "logradouro",
            "numero": "552",
            "complemento": "4 andar",
            "bairro": "VILA MARIANA",
            "cidade": "SAO PAULO",
            "estado": "SP",
            "estadoEnum": "SP",
            "cep": "01525-001",
            "depositaria": "Depositaria",
            "padrao": null,
            "identificacaoExterna": null,
            "enderecoFormatado": "Loren Ipsum",
            "empty": false
          },
          "email": "email@email.com",
          "telefone": null,
          "dataRef": 1559314800000,
          "logradouro": "logradouro",
          "numero": "552",
          "complemento": "4 andar",
          "bairro": "VILA MARIANA",
          "cep": "01525-001",
          "cidade": "SAO PAULO",
          "estado": "SP",
          "quantidadeTotal": 1800987.00000000,
          "cpfCnpjFormatado": "00.004.000/0001-04",
          "quantidadeFormatada": "1.800.987,00000000",
          "quantidadeTotalFormatada": "1.800.987,00000000",
          "quantidadeBloqueadaFormatada": "0,00000000"
        },
        {
          "investidor": "Jhon Doe",
          "investidorId": 5056305,
          "naturezaInvestidorBvmf": null,
          "naturezaInvestidorBvmfDescricao": "",
          "ativo": "Lorem Ipsum Text Blocks",
          "ativoId": 5001618,
          "depositaria": "Depositaria",
          "isin": null,
          "cpfCnpj": "21550382000105",
          "codigoAtivoCETIP": null,
          "quantidade": 1800987.00000000,
          "quantidadeBloqueada": 0,
          "emissor": "Capitalise each word",
          "emissorId": 5000805,
          "administradorId": null,
          "endereco": {
            "id": 5126494,
            "logradouro": "Logradouro",
            "numero": null,
            "complemento": null,
            "bairro": null,
            "cidade": null,
            "estado": null,
            "estadoEnum": null,
            "cep": null,
            "depositaria": "Depositaria",
            "padrao": null,
            "identificacaoExterna": null,
            "enderecoFormatado": "Logradouro",
            "empty": false
          },
          "email": "email@email.com",
          "telefone": null,
          "dataRef": 1559314800000,
          "logradouro": "Logradouro",
          "numero": null,
          "complemento": null,
          "bairro": null,
          "cep": null,
          "cidade": null,
          "estado": null,
          "quantidadeTotal": 1800987.00000000,
          "cpfCnpjFormatado": "00.004.000/0001-04",
          "quantidadeFormatada": "1.800.987,00000000",
          "quantidadeTotalFormatada": "1.800.987,00000000",
          "quantidadeBloqueadaFormatada": "0,00000000"
        },
        {
          "investidor": "Jhon Doe",
          "investidorId": 5053951,
          "naturezaInvestidorBvmf": null,
          "naturezaInvestidorBvmfDescricao": "",
          "ativo": "Lorem Ipsum Text Blocks",
          "ativoId": 5001619,
          "depositaria": "Depositaria",
          "isin": null,
          "cpfCnpj": "18289001000163",
          "codigoAtivoCETIP": null,
          "quantidade": 1599999.00000000,
          "quantidadeBloqueada": 0,
          "emissor": "Capitalise each word",
          "emissorId": 5000806,
          "administradorId": null,
          "endereco": {
            "id": 5106847,
            "logradouro": "logradouro",
            "numero": "552",
            "complemento": "4 andar",
            "bairro": "VILA MARIANA",
            "cidade": "SAO PAULO",
            "estado": "SP",
            "estadoEnum": "SP",
            "cep": "01525-001",
            "depositaria": "Depositaria",
            "padrao": null,
            "columnsderecoFormatado": "logradouro",
            "empty": false
          },
          "email": "email@email.com",
          "telefone": null,
          "dataRef": 1559314800000,
          "logradouro": "logradouro",
          "numero": "552",
          "complemento": "4 andar",
          "bairro": "VILA MARIANA",
          "cep": "01525-001",
          "cidade": "SAO PAULO",
          "estado": "SP",
          "quantidadeTotal": 1599999.00000000,
          "cpfCnpjFormatado": "00.004.000/0001-04",
          "quantidadeFormatada": "1.599.999,00000000",
          "quantidadeTotalFormatada": "1.599.999,00000000",
          "quantidadeBloqueadaFormatada": "0,00000000"
        },
        {
          "investidor": "Jhon Doe",
          "investidorId": 5056488,
          "naturezaInvestidorBvmf": null,
          "naturezaInvestidorBvmfDescricao": "",
          "ativo": "Lorem Ipsum Text Blocks",
          "ativoId": 5001619,
          "depositaria": "Depositaria",
          "isin": null,
          "cpfCnpj": "35271620700",
          "codigoAtivoCETIP": null,
          "quantidade": 1.00000000,
          "quantidadeBloqueada": 0,
          "emissor": "Capitalise each word",
          "emissorId": 5000806,
          "administradorId": null,
          "endereco": {
            "id": 5126677,
            "logradouro": "Logradouro",
            "numero": null,
            "complemento": null,
            "bairro": null,
            "cidade": null,
            "estado": null,
            "estadoEnum": null,
            "cep": null,
            "depositaria": "Depositaria",
            "padrao": null,
            "identificacaoExterna": null,
            "enderecoFormatado": "Logradouro",
            "empty": false
          },
          "email": "email@email.com",
          "telefone": null,
          "dataRef": 1559314800000,
          "logradouro": "Logradouro",
          "numero": null,
          "complemento": null,
          "bairro": null,
          "cep": null,
          "cidade": null,
          "estado": null,
          "quantidadeTotal": 1.00000000,
          "cpfCnpjFormatado": "00.004.000/0001-04",
          "quantidadeFormatada": "1,00000000",
          "quantidadeTotalFormatada": "1,00000000",
          "quantidadeBloqueadaFormatada": "0,00000000"
        },
        {
          "investidor": "Jhon Doe",
          "investidorId": 5056300,
          "naturezaInvestidorBvmf": null,
          "naturezaInvestidorBvmfDescricao": "",
          "ativo": "Lorem Ipsum Text Blocks",
          "ativoId": 5000878,
          "depositaria": "Depositaria",
          "isin": null,
          "cpfCnpj": "14794464000121",
          "codigoAtivoCETIP": "2233715AB2",
          "quantidade": 5080997.00000000,
          "quantidadeBloqueada": 0,
          "emissor": "Capitalise each word",
          "emissorId": 5000181,
          "administradorId": 5000050,
          "endereco": {
            "id": 5126489,
            "logradouro": "Logradouro",
            "numero": null,
            "complemento": null,
            "bairro": null,
            "cidade": null,
            "estado": null,
            "estadoEnum": null,
            "cep": null,
            "depositaria": "Depositaria",
            "padrao": null,
            "identificacaoExterna": null,
            "enderecoFormatado": "Logradouro",
            "empty": false
          },
          "email": "email@email.com",
          "telefone": null,
          "dataRef": 1559314800000,
          "logradouro": "Logradouro",
          "numero": null,
          "complemento": null,
          "bairro": null,
          "cep": null,
          "cidade": null,
          "estado": null,
          "quantidadeTotal": 5080997.00000000,
          "cpfCnpjFormatado": "00.004.000/0001-04",
          "quantidadeFormatada": "5.080.997,00000000",
          "quantidadeTotalFormatada": "5.080.997,00000000",
          "quantidadeBloqueadaFormatada": "0,00000000"
        },
        {
          "investidor": "Jhon Doe",
          "investidorId": 5052561,
          "naturezaInvestidorBvmf": null,
          "naturezaInvestidorBvmfDescricao": "",
          "ativo": "Lorem Ipsum Text Blocks",
          "ativoId": 5001200,
          "depositaria": "Depositaria",
          "isin": null,
          "cpfCnpj": "46268841808",
          "codigoAtivoCETIP": null,
          "quantidade": 27500.00000000,
          "quantidadeBloqueada": 0,
          "emissor": "Capitalise each word",
          "emissorId": 5000462,
          "administradorId": 5000000,
          "endereco": {
            "id": 5104976,
            "logradouro": "logradouro",
            "numero": "500",
            "complemento": "complemento",
            "bairro": "bairro",
            "cidade": "São Paulo",
            "estado": "SP",
            "estadoEnum": "SP",
            "cep": "00000-001",
            "depositaria": "Depositaria",
            "padrao": null,
            "identificacaoExterna": null,
            "enderecoFormatado": "Logradouro",
            "empty": false
          },
          "email": "email@email.com",
          "telefone": null,
          "dataRef": 1559314800000,
          "logradouro": "logradouro",
          "numero": "500",
          "complemento": "complemento",
          "bairro": "bairro",
          "cep": "00000-001",
          "cidade": "São Paulo",
          "estado": "SP",
          "quantidadeTotal": 27500.00000000,
          "cpfCnpjFormatado": "00.004.000/0001-04",
          "quantidadeFormatada": "27.500,00000000",
          "quantidadeTotalFormatada": "27.500,00000000",
          "quantidadeBloqueadaFormatada": "0,00000000"
        },
        {
          "investidor": "Jhon Doe",
          "investidorId": 5052938,
          "naturezaInvestidorBvmf": null,
          "naturezaInvestidorBvmfDescricao": "",
          "ativo": "Lorem Ipsum Text Blocks",
          "ativoId": 5001200,
          "depositaria": "Depositaria",
          "isin": null,
          "cpfCnpj": "49321570888",
          "codigoAtivoCETIP": null,
          "quantidade": 27500.00000000,
          "quantidadeBloqueada": 0,
          "emissor": "Capitalise each word",
          "emissorId": 5000462,
          "administradorId": 5000000,
          "endereco": {
            "id": 5105447,
            "logradouro": "logradouro",
            "numero": "500",
            "complemento": "complemento",
            "bairro": "bairro",
            "cidade": "São Paulo",
            "estado": "SP",
            "estadoEnum": "SP",
            "cep": "00000-001",
            "depositaria": "Depositaria",
            "padrao": null,
            "identificacaoExterna": null,
            "enderecoFormatado": "Logradouro",
            "empty": false
          },
          "email": "email@email.com",
          "telefone": null,
          "dataRef": 1559314800000,
          "logradouro": "logradouro",
          "numero": "500",
          "complemento": "complemento",
          "bairro": "bairro",
          "cep": "00000-001",
          "cidade": "São Paulo",
          "estado": "SP",
          "quantidadeTotal": 27500.00000000,
          "cpfCnpjFormatado": "00.004.000/0001-04",
          "quantidadeFormatada": "27.500,00000000",
          "quantidadeTotalFormatada": "27.500,00000000",
          "quantidadeBloqueadaFormatada": "0,00000000"
        },
        {
          "investidor": "Jhon Doe",
          "investidorId": 5052972,
          "naturezaInvestidorBvmf": null,
          "naturezaInvestidorBvmfDescricao": "",
          "ativo": "Lorem Ipsum Text Blocks",
          "ativoId": 5001200,
          "depositaria": "Depositaria",
          "isin": null,
          "cpfCnpj": "49321689850",
          "codigoAtivoCETIP": null,
          "quantidade": 27500.00000000,
          "quantidadeBloqueada": 0,
          "emissor": "Capitalise each word",
          "emissorId": 5000462,
          "administradorId": 5000000,
          "endereco": {
            "id": 5105498,
            "logradouro": "logradouro",
            "numero": "500",
            "complemento": "complemento",
            "bairro": "bairro",
            "cidade": "São Paulo",
            "estado": "SP",
            "estadoEnum": "SP",
            "cep": "00000-001",
            "depositaria": "Depositaria",
            "padrao": null,
            "identificacaoExterna": null,
            "enderecoFormatado": "Logradouro",
            "empty": false
          },
          "email": "email@email.com",
          "telefone": null,
          "dataRef": 1559314800000,
          "logradouro": "logradouro",
          "numero": "500",
          "complemento": "complemento",
          "bairro": "bairro",
          "cep": "00000-001",
          "cidade": "São Paulo",
          "estado": "SP",
          "quantidadeTotal": 27500.00000000,
          "cpfCnpjFormatado": "00.004.000/0001-04",
          "quantidadeFormatada": "27.500,00000000",
          "quantidadeTotalFormatada": "27.500,00000000",
          "quantidadeBloqueadaFormatada": "0,00000000"
        },
        {
          "investidor": "Jhon Doe",
          "investidorId": 5052990,
          "naturezaInvestidorBvmf": null,
          "naturezaInvestidorBvmfDescricao": "",
          "ativo": "Lorem Ipsum Text Blocks",
          "ativoId": 5001200,
          "depositaria": "Depositaria",
          "isin": null,
          "cpfCnpj": "49321624805",
          "codigoAtivoCETIP": null,
          "quantidade": 27500.00000000,
          "quantidadeBloqueada": 0,
          "emissor": "Capitalise each word",
          "emissorId": 5000462,
          "administradorId": 5000000,
          "endereco": {
            "id": 5105527,
            "logradouro": "logradouro",
            "numero": "500",
            "complemento": "complemento",
            "bairro": "bairro",
            "cidade": "São Paulo",
            "estado": "SP",
            "estadoEnum": "SP",
            "cep": "00000-001",
            "depositaria": "Depositaria",
            "padrao": null,
            "identificacaoExterna": null,
            "enderecoFormatado": "Loren Ipsum",
            "empty": false
          },
          "email": "email@email.com",
          "telefone": null,
          "dataRef": 1559314800000,
          "logradouro": "logradouro",
          "numero": "500",
          "complemento": "complemento",
          "bairro": "bairro",
          "cep": "00000-001",
          "cidade": "São Paulo",
          "estado": "SP",
          "quantidadeTotal": 27500.00000000,
          "cpfCnpjFormatado": "00.004.000/0001-04",
          "quantidadeFormatada": "27.500,00000000",
          "quantidadeTotalFormatada": "27.500,00000000",
          "quantidadeBloqueadaFormatada": "0,00000000"
        },
        {
          "investidor": "Jhon Doe",
          "investidorId": 5105137,
          "naturezaInvestidorBvmf": null,
          "naturezaInvestidorBvmfDescricao": "",
          "ativo": "Lorem Ipsum Text Blocks",
          "ativoId": 5002859,
          "depositaria": "CETIP",
          "isin": null,
          "cpfCnpj": "29505630000108",
          "codigoAtivoCETIP": "AGEL11",
          "quantidade": 18441.00000000,
          "quantidadeBloqueada": 0,
          "emissor": "Any data",
          "emissorId": 5001802,
          "administradorId": null,
          "endereco": {
            "id": null,
            "logradouro": null,
            "numero": null,
            "complemento": null,
            "bairro": null,
            "cidade": null,
            "estado": null,
            "estadoEnum": null,
            "cep": null,
            "depositaria": "Depositaria",
            "padrao": null,
            "identificacaoExterna": null,
            "enderecoFormatado": "Loren Ipsum",
            "empty": true
          },
          "email": "email@email.com",
          "telefone": null,
          "dataRef": 1559314800000,
          "logradouro": null,
          "numero": null,
          "complemento": null,
          "bairro": null,
          "cep": null,
          "cidade": null,
          "estado": null,
          "quantidadeTotal": 18441.00000000,
          "cpfCnpjFormatado": "00.004.000/0001-04",
          "quantidadeFormatada": "18.441,00000000",
          "quantidadeTotalFormatada": "18.441,00000000",
          "quantidadeBloqueadaFormatada": "0,00000000"
        }
      ]
    }
  }
  constructor(
    private service: TableService,
    private http: HttpClient) { }
  ngOnInit() {
    this.getItems();
  }
  getItems() {
    this.service.getFiles().subscribe(
      (data: any) => {
        this.dataItems = data
      }
    )
  }
}
