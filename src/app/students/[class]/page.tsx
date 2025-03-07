'use client';

import { useParams } from 'next/navigation';
import { Box, Heading, Text, SimpleGrid, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { mockStudents } from '@/mock/mockStudent';
import { CardStudentData } from '@/components/global/CardStudent';

export default function StudentsByClass() {
  const params = useParams();
  const className = params.class as string; // Garante que é string

  const filteredStudents = mockStudents.filter(student => student.name_class === className);

  return (
    <Box p={5} maxW="100%" mx="auto" maxWidth={1480}>
      <Heading as="h1" size="2xl" mb={4}>
        Alunos da Turma {className?.toUpperCase()}
      </Heading>

      <Button bg="gray.500" mb={4}>
        <Link href="/students">Voltar para todas as turmas</Link>
      </Button>

      {filteredStudents.length === 0 ? (
        <Text color="gray.500">Nenhum aluno encontrado para esta turma.</Text>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
          {filteredStudents.map(student => (
            <CardStudentData
              key={student.id}
              id={student.id}
              name_student={student.name_student}
              name_class={student.name_class} // Certifique-se que `CardStudentProps` aceita esse campo
              teacher={student.teacher}
              phone={student.phone}
              period={student.period}
              birthdate={student.birthdate}
              onClick={() => console.log(`Aluno ${student.name_student} selecionado`)}
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}
