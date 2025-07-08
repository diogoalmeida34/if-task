export interface Usuario {
  id: string;
  email: string;
  senha: string; // Armazenada de forma segura (hash)
}