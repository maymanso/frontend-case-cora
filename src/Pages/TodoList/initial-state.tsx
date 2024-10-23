import { TaskType } from "../../types/todoList/todoList.type";

export const TODO_LIST: TaskType[] = [
  {
    id: "5ce31291-d06b-4940-9d14-0f41d116fe76",
    ref: 1,
    title: "Visualizar to-do list corretamente",
    description: `
1. Criar rota e conseguir visualizar o to-do list.
2. Visualizar todas as tasks corretamente.

****Info:**** Ta conseguindo ver o to-do list com a quantidade
correta de tasks? Parabéns, você finalizou a sua primeira task 🎉;

`,
    status: "done",
    required: true,
  },
  {
    id: "bcd69907-601f-461b-a8c4-4c3fc3b827e9",
    ref: 2,
    title: "Resolver to-do bugs",
    description: `
Nos ajude com o nosso produto de to-do list e resolva os bugs abaixo:

1. A troca de status, de **pending** para **done** e vice - versa, não esta funcionando corretamenta.
2. A busca não esta funcionando corretamente.
3. O **delete** não ta removendo o item.
4. A nossa lista ta começando com o número **0**, mas
precisamos que ela comece com o número **1**.
5. Alguns links não estão funcionando.`,
    status: "done",
    required: true,
  },
  {
    id: "ea82af08-ffd1-41fe-9c30-b760ae7ee8c9",
    ref: 3,
    title: "Página de login - CSS",
    description: `
A página de Login já esta estruturada corretamente, mas parece que tem alguma coisa errada com o CSS dessa página :/
\n
[figma](https://www.figma.com/file/TXxt0VFxbzDoho4tmt9XPP/Teste_FrontWeb?type=design&node-id=3-2773&mode=dev)`,
    status: "done",
    required: true,
  },
  {
    id: "ea82af08-ffd1-41fe-9c60-b760ae7ee8ce",
    ref: 4,
    title: "Página de login - Integração",
    description: `
1. Faça a integração com o endpoint de autenticação. O contrato esta no **README.md** do projeto.
\n
**Info:** Sinta-se livre para fazer melhorias :)
\n
[endpoint de autenticação]('http://localhost:3000/auth')`,
    status: "done",
    required: true,
  },
  {
    id: "9c3fd0b8-2cc2-433b-b80c-e12ee4c0524e",
    ref: 5,
    title: "Página de lista de transações",
    description: `
1. Crie a página de lista de transações de acordo com o link do figma
(não esqueça que essa é uma página de área logada).
2. Faça a integração com o endpoint de lista.
O contrato esta no **README.md** do projeto.
\n
[figma](https://www.figma.com/file/TXxt0VFxbzDoho4tmt9XPP/Teste_FrontWeb?type=design&node-id=5-3378&mode=dev)
[endpoint de lista](http://localhost:3000/list)`,
    status: "done",
    required: true,
  },
  {
    id: "5ce31291-d06b-4940-9d14-0f41a116fe76",
    ref: 6,
    title: "Filtro por tipo de transação",
    description: `
Adicione a possibilidade de filtrar a tela de transações por tipo de
transação (tela feita na task anterior).
\n
\n
**Note:** Utilize os <u>buttons</u> que aparecem no topo da
tela de lista de transações para fazer o filtro.
**Important:** O tipo da transação é a chave{" "}
**entry**, com valor **DEBIT** ou{" "}
**CREDIT**, dentro do response retornado pela api.
\n
[figma](https://www.figma.com/file/TXxt0VFxbzDoho4tmt9XPP/Teste_FrontWeb?type=design&node-id=5-3378&mode=dev)`,
    status: "done",
    required: true,
  },
  {
    id: "be4f2532-aca4-46c8-84b8-c9fe41d7fb7f",
    ref: 7,
    title: "Extra",
    description: `
Agora é o seu momento de brilhar.
Teste a usabilidade e avalie o código,
na **To-do** list e página de **Login**, para
encontrar bugs, falhas de comportamento e possíveis melhorias
(performance, código, boas práticas).
**Se faça a seguinte pergunta**: Se esse produto fosse meu,
quais melhorias eu faria no código e no produto?
\n
\n
**Note:** Essa task não é obrigatória. Ela pode fazer a
diferença na avaliação geral e/ou na hora de decidirmos o melhor perfil
para a vaga.
**Important:** Encontrou algo? Crie novas tasks nessa lista
de to-dos, para conseguirmos te avaliar de uma forma mais assertiva.
ObrigadaUm 🚀;
`,
    status: "pending",
    required: false,
  },
];
