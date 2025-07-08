# 📚 IF Task - Sistema de Gestão de Tarefas e Projetos Acadêmicos

**IF Task** é um aplicativo mobile desenvolvido para auxiliar estudantes na organização de tarefas e projetos acadêmicos. A aplicação permite criar, visualizar, editar e excluir tarefas e projetos, com foco em usabilidade, organização visual e componentes reutilizáveis.

---

## 👨‍💻 Desenvolvedor

- **Nome**: Diogo Da Silva Almeida
- **Matrícula**: GU3059995
- **Instituição**: IFSP - Instituto Federal de Educação, Ciência e Tecnologia de São Paulo

---

## 🎥 Apresentação em Vídeo

🔗 Assista no YouTube -> https://youtu.be/iITLR9TOktk

---

## 📌 Funcionalidades

- **Autenticação de usuário**: Login seguro para acesso ao app.
- **Gerenciamento de tarefas**:
  - Criação, edição e exclusão de tarefas.
  - Atributos: título, descrição, data de vencimento, prioridade (Baixa, Média, Alta) e status (Pendente, Em Andamento, Concluída).
- **Gerenciamento de projetos**:
  - Criação, edição e exclusão de projetos.
  - Atributos: título e descrição.
- **Agrupamento**: Tarefas associadas a projetos.
- **Confirmação de ações críticas**: Modal para confirmação de exclusão.
- **Navegação intuitiva**: Acesso às principais seções em até 2 cliques.
- **Interface responsiva**: Design adaptável com componentes reutilizáveis.

---


## 🧱 Estrutura de Pastas

```
if-task/
├───assets
│   │   adaptive-icon.png
│   │   favicon.png
│   │   icon.png
│   │   splash-icon.png
│   │
│   └───icons
│           logo_ifsp.png
│
├───components
│       BarraNavegacao.tsx
│       BotaoPrimario.tsx
│       BotaoSecundario.tsx
│       CampoTexto.tsx
│       CardProjeto.tsx
│       CardTarefa.tsx
│       ModalConfirmacao.tsx
│       SelecaoPrioridade.tsx
│       SelecaoProjeto.tsx
│
├───models
│       Projeto.ts
│       Tarefa.ts
│       Usuario.ts
│
├───navigation
│       AppNavigator.tsx
│
├───screens
│       ConfiguracoesScreen.tsx
│       EditarProjetoScreen.tsx
│       EditarTarefaScreen.tsx
│       ListaTarefasScreen.tsx
│       LoginScreen.tsx
│       NovaTarefaScreen.tsx
│       NovoProjetoScreen.tsx
│       ProjetosScreen.tsx
│
├───services
│       AuthService.ts
│       ProjetoService.ts
│       TarefaService.ts
│
└───styles
        global.ts
        theme.ts
├── package.json             # Dependências
├── tsconfig.json            # Configuração TypeScript
├── README.md                # Documentação do projeto
├── App.tsx                  # Entrada principal do app
```

---

## 🧩 Componentes Reutilizáveis

| Componente            | Descrição                                                                 |
|-----------------------|---------------------------------------------------------------------------|
| `BotaoPrimario`       | Botão principal para ações (ex: Login, Adicionar, Confirmar).              |
| `BotaoSecundario`     | Botão para ações secundárias (ex: Cancelar, Esqueceu a senha).             |
| `CampoTexto`          | Entrada de texto para formulários com suporte a diferentes tipos.          |
| `SelecaoPrioridade`   | Seleção de prioridade da tarefa (Baixa, Média, Alta).                     |
| `CardTarefa`          | Cartão com informações de uma tarefa e ações de edição/exclusão.          |
| `CardProjeto`         | Cartão com informações de um projeto e ações de navegação/exclusão.       |
| `ModalConfirmacao`    | Modal para confirmação de ações críticas (exclusão).                      |
| `BarraNavegacao`      | Barra inferior para navegação entre seções (Tarefas, Projetos, Configurações). |
| `SelecaoProjeto`      | Seleção de projetos para associação com tarefas.                          |


---

## 🗃️ Modelos de Dados (TypeScript)

### 🎯 Tarefa

```typescript
interface Tarefa {
  id: string;
  titulo: string;
  descricao: string;
  dataVencimento: string; // YYYY-MM-DD
  prioridade: 'Baixa' | 'Média' | 'Alta';
  status: 'Pendente' | 'Em Andamento' | 'Concluída';
  projetoId: string;
}
```

### 🧪 Projeto

```typescript
interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
}
```

### 👤 Usuário

```typescript
interface Usuario {
  id: string;
  email: string;
  senha: string; // Hash
}
```

---

## ⚙️ Tecnologias Utilizadas

- **React Native** + **TypeScript**: Desenvolvimento mobile com tipagem forte.
- **React Navigation**: Navegação entre telas.
- **Styled Components** (opcional): Estilização de componentes.
- **AsyncStorage** ou **Firebase**: Persistência de dados local ou em nuvem.
- **Expo**: Ferramenta para build e execução do aplicativo mobile.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**
- **Expo CLI**: Instale globalmente com `npm install -g expo-cli`
- Dispositivo ou emulador (Android/iOS) configurado

### Passos para Instalação e Execução

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/if-task.git
   cd if-task
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

3. **Inicie o servidor Expo**:

   ```bash
   expo start
   ```

   ou

   ```bash
   npm start
   ```

4. **Execute no dispositivo/emulador**:

   - Escaneie o QR code com o aplicativo **Expo Go** (disponível para iOS e Android).
   - Alternativamente, pressione `a` no terminal para abrir no emulador Android ou `i` para iOS (emuladores devem estar configurados).

---

## 🛡️ Licença

Este projeto está licenciado sob a MIT License.  
Consulte o arquivo [`LICENSE`](LICENSE) para mais detalhes.

---

## 🧠 Considerações Finais

O sistema **IF Task** foi planejado com foco em:

- **Reutilização de componentes**: Para maior manutenibilidade.
- **Navegação simples**: Acesso às seções em até 2 cliques.
- **Tipagem forte**: Uso de TypeScript para segurança no desenvolvimento.
- **Modularidade**: Separação de responsabilidades em pastas organizadas.
- **Escalabilidade**: Estrutura preparada para expansões futuras (ex: suporte a multiusuários ou integração com backend REST).

Este repositório representa o resultado final do projeto acadêmico, com estrutura, documentação e implementação alinhadas às boas práticas de desenvolvimento mobile.
