import { api } from "./api";

// Função para buscar os alunos da API
export const getStudents = async () => {
    const response = await api.get("/users");
    return response.data;
};

// Função para buscar um aluno por ID
export const getStudentById = async (id: number) => {
    const response = await api.get(`/users/${id}`); // URL para buscar aluno por ID
    return response.data;
};
