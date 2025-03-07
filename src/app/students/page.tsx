'use client';

import { useState } from "react";
import { Box, SimpleGrid, Heading, Text, HStack, Button, Flex, Spinner } from "@chakra-ui/react";
import { Student, useStudents } from "@/hooks/useStudents";
import { useRouter } from "next/navigation";
import { mockStudents } from "@/mock/mockStudent";
import { CardStudentData, mockStudent } from "@/components/global/CardStudent";

export default function AllStudents() {
  const { data: students, isLoading, error } = useStudents();
  const router = useRouter();

  // Estado para armazenar a página atual
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5; // Número de alunos por página

  // Calculando os índices de alunos para exibição
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = mockStudents?.slice(indexOfFirstStudent, indexOfLastStudent);

  // Calcular total de páginas
  const totalPages = students ? Math.ceil(mockStudents.length / studentsPerPage) : 0;

  // Função para mudar de página
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Navegar para detalhes do aluno usando ID
  const handleDetailsClick = (id: number) => {
    if (id) {
      router.push(`/users/${id}`);
    }
  };

  if (isLoading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">Erro ao carregar alunos</Text>;

  if (!students || students.length === 0) {
    return <Text color="gray.500">Nenhum aluno encontrado.</Text>;
  }

  return (
    <Box p={5} maxW="100%" mx="auto" maxWidth={1480}>
      <Heading as="h1" size="2xl" mb={4}>
        Bem-vindo à Lista de Alunos
      </Heading>
      <Text fontSize="xl" color="gray.500" mb={8}>
        Aqui você pode visualizar os alunos e suas informações
      </Text>

      <HStack display={'flex'} gap={5} alignItems={'center'}>
        <Button onClick={() => router.push(`/students/1A`)}>Turma 1A</Button>
        <Button onClick={() => router.push(`/students/2B`)}>Turma 2B</Button>
        <Button onClick={() => router.push(`/students/3A`)}>Turma 3A</Button>
      </HStack>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} gap={6}>
        {currentStudents?.map((student) => (
          <CardStudentData
            key={student.id}
            id={student.id}
            name_student={student.name_student} // Convertendo 'name_student' para 'name'
            name_class={student.name_class} // Adaptando para outra prop do CardStudent
            teacher={student.teacher}
            phone={student.phone}
            period={student.period}
            birthdate={student.birthdate}
            onClick={() => handleDetailsClick(student.id)}
          />
        ))}
      </SimpleGrid>


      {/* Paginação */}
      <Flex justify="center" mt={6} gap={4}>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          isDisabled={currentPage === 1}
        >
          Anterior
        </Button>
        <Text>Página {currentPage} de {totalPages}</Text>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          isDisabled={currentPage === totalPages}
        >
          Próximo
        </Button>
      </Flex>
    </Box>
  );
}



// eu tenho uma duvida sobre a estrutura das pastas no projeto...

// Geralmente quando voce tem um produto, esse produto pertence a uma categoria, logo seria algo como: all-produtcts/category/name-category/product, 

// No nosso caso eu queria saber se o nosso projeto segue algo parecido, tendo em vista que todos os alunos estao dentro de uma turma, entao cada turma tem um nome e depois encontramos o aluno, e assim mesmo?

