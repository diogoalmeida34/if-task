export interface Tarefa {
  id: string;
  titulo: string;
  descricao: string;
  dataVencimento: string;
  prioridade: 'Baixa' | 'Média' | 'Alta';
  status: 'Pendente' | 'Em Andamento' | 'Concluída';
  projetoId: string; 
}
