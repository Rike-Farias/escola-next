"use client";

import { Box, SimpleGrid, Heading, Text, HStack, Button, Flex, Spinner } from "@chakra-ui/react";
import { CardStudent } from "@/components/global/Card";
import Link from "next/link"; // Importando o Link do Next.js
import { Student, useStudents } from "@/hooks/useStudents";

export default function Home() {

  const { data: students, isLoading, error } = useStudents();

  if (isLoading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">Erro ao carregar alunos</Text>;

  return (
    <Box p={5} maxW="100%" mx="auto" maxWidth={1480}>
      {/* Título e Subtítulo */}
      <Heading as="h1" size="2xl" mb={4}>Bem-vindo à Tela Home</Heading>
      <Text fontSize="xl" color="gray.500" mb={8}>Aqui você pode visualizar os alunos e suas informações</Text>

      {/* Menu de Navegação */}
      <Flex justify="space-between" mb={6}>
        <HStack gap={4}>
          <Button bg="red" width={'5rem'}>
            <Link href="/">Home</Link>
          </Button>
          <Button bg="blue" width={'5rem'}>
            <Link href="/students">Alunos</Link>
          </Button>
          <Button bg="teal" width={'5rem'}>
            <Link href="/turmas">Turmas</Link>
          </Button>
        </HStack>
      </Flex>

      {/* Lista de Alunos
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} gap={6} >
        {students?.map((student: Student, index: number) => (
          <CardStudent
            id={student.id}
            username={student.username}
            key={index}
            name={student.name}
            email={student.email}
            phone={student.phone}
            website={student.website}
          />
        ))}
      </SimpleGrid> */}
    </Box>
  );
}
