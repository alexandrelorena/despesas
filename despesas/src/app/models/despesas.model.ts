export interface Despesas {
  id?: number; // O ID é opcional, pois será gerado pelo banco
  user_id: number; // Adicionando o user_id
  description: string; // Alinhando com a descrição da tabela
  amount: number; // Alinhando com o valor da tabela
  expense_date: string; // Alterando o nome para refletir a tabela
}
