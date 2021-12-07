export interface  RootObject {
    paginationResponse: PaginationResponse;
  }
  
  export interface  PaginationResponse {
    total: number;
    pagina: number;
    elementos: Elemento[];
  }
  
  export interface  Elemento {
    investidor: string;
    investidorId: number;
    naturezaInvestidorBvmf?: string;
    naturezaInvestidorBvmfDescricao: string;
    ativo: string;
    ativoId: number;
    depositaria: string;
    isin?: string;
    cpfCnpj: string;
    codigoAtivoCETIP?: string;
    quantidade: number;
    quantidadeBloqueada: number;
    emissor: string;
    emissorId: number;
    administradorId?: number;
    endereco: Endereco;
    email?: string;
    telefone?: any;
    dataRef: number;
    logradouro?: string;
    numero?: string;
    complemento?: string;
    bairro?: string;
    cep?: string;
    cidade?: string;
    estado?: string;
    quantidadeTotal: number;
    cpfCnpjFormatado: string;
    quantidadeFormatada: string;
    quantidadeTotalFormatada: string;
    quantidadeBloqueadaFormatada: string;
  }
  
  export interface  Endereco {
    id?: number;
    logradouro?: string;
    numero?: string;
    complemento?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    estadoEnum?: string;
    cep?: string;
    depositaria: string;
    padrao?: any;
    identificacaoExterna?: any;
    enderecoFormatado: string;
    empty: boolean;
  }