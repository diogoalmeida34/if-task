interface BarraNavegacaoProps {
  telas: { nome: string; icone: string; rota: string }[];
  telaAtiva: string;
  onNavigate: (rota: string) => void;
}