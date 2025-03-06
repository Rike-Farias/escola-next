// pages/students/page.tsx
'use client' // Diretriz que garante que o código será executado no lado do cliente

import { Box, SimpleGrid, Heading, Text, HStack, Button, Flex, Spinner } from "@chakra-ui/react";
import { CardStudent } from "@/components/global/Card";
import Link from "next/link";
import { Student, useStudents } from "@/hooks/useStudents";
import { useRouter } from "next/navigation";

export default function AllStudents() {
  const { data: students, isLoading, error } = useStudents();
  const router = useRouter();  // Usando o useRouter aqui

  // Função para navegar para a página de detalhes do aluno
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
      {/* Título e Subtítulo */}
      <Heading as="h1" size="2xl" mb={4}>
        Bem-vindo à Lista de Alunos
      </Heading>
      <Text fontSize="xl" color="gray.500" mb={8}>
        Aqui você pode visualizar os alunos e suas informações
      </Text>

      {/* Menu de Navegação */}
      <Flex justify="space-between" mb={6}>
        <HStack gap={4} wrap="wrap">
          <Button bg="red" width={{ base: "100%", sm: "auto" }} mb={2}>
            <Link href="/">Home</Link>
          </Button>
          <Button bg="blue" width={{ base: "100%", sm: "auto" }} mb={2}>
            <Link href="/alunos">Alunos</Link>
          </Button>
          <Button bg="teal" width={{ base: "100%", sm: "auto" }} mb={2}>
            <Link href="/turmas">Turmas</Link>
          </Button>
        </HStack>
      </Flex>

      {/* Lista de Alunos */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} gap={6}>
        {students?.map((student: Student) => (
          <CardStudent
            key={student.id}
            id={student.id}
            username={student.username}
            name={student.name}
            email={student.email}
            phone={student.phone}
            website={student.website}
            onClick={() => handleDetailsClick(student.id)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
