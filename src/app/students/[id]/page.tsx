// pages/student/[id].tsx

'use client'

import { useRouter } from "next/router"; // Importando o useRouter para pegar o ID da URL
import { Box, Spinner, Text } from "@chakra-ui/react";
import { useStudentById } from "@/hooks/useStudents";

const StudentPage = () => {
  const router = useRouter();
  const { id } = router.query; // Obtendo o ID da URL

  // Verificando se o ID está presente e é um número válido
  const studentId = typeof id === "string" ? parseInt(id) : null;

  // Se o ID não for válido, podemos renderizar uma mensagem de erro ou redirecionar
  if (studentId === null) {
    return <Text color="red.500">ID do aluno inválido.</Text>;
  }

  // Usando o hook para pegar o aluno
  const { data, isLoading, error } = useStudentById(studentId);

  if (isLoading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">Erro ao carregar aluno</Text>;

  // Se os dados estiverem disponíveis, mostre as informações do aluno
  return (
    <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold">{data?.name}</Text>
      <Text>Email: {data?.email}</Text>
      <Text>Telefone: {data?.phone}</Text>
      <Text>Site: {data?.website}</Text>
      <Text>Empresa: {data?.company?.name}</Text>
      <Text>Endereço: {data?.address?.street}, {data?.address?.city}</Text>
    </Box>
  );
};

export default StudentPage;
