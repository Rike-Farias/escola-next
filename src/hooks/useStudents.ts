import { useQuery } from "@tanstack/react-query";
import { getStudents, getStudentById } from "@/services/students";

export interface Student {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}


export const useStudents = () => {
    return useQuery<Student[]>({
        queryKey: ["students"], // Identificador único para o cache
        queryFn: getStudents, // Função que faz a requisição
        staleTime: 1000 * 60 * 5, // Mantém os dados no cache por 5 minutos
    });
};

export const useStudentById = (id: number) => {
    return useQuery({
        queryKey: ["student", id], // Define a chave única para cache
        queryFn: () => getStudentById(id), // Passa a função que vai buscar o aluno por ID
        enabled: !!id, // Só executa a consulta se o ID estiver disponível
    });
};
