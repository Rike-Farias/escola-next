'use client'
import { Button, Box, HStack, Stack, Text } from "@chakra-ui/react";

export interface mockStudent {
    id: number;
    name_student: string;
    name_class: string;
    period: string; // Definindo os valores possíveis como um union type
    teacher: string;
    phone: string;
    birthdate: string; // Mantive como string, mas poderia ser Date se preferir trabalhar com objetos Date
    onClick: (id: number) => void; // Ajustado para receber o ID do aluno como argumento
}

export const CardStudentData = ({ id, name_student, name_class, period, teacher, phone, birthdate, onClick }: mockStudent) => {

  return (
    <Box maxW="320px" borderRadius="lg" boxShadow="sm" overflow="hidden" p="4" bg="white" border="1px solid" borderColor="gray.200">
      <HStack mb="4" gap={2} align="center">
        <Stack gap={1}>
          <Text fontWeight="semibold" fontSize="lg">Nome: {name_student}</Text>
          <Text fontSize="sm" color="gray.500">Turma: {name_class}</Text>
          <Text fontSize="sm" color="gray.500">Turno: {period}</Text>
          <Text fontSize="sm" color="gray.500">Telefone: {phone}</Text>
          <Text fontSize="sm" color="gray.500">Professor: {teacher}</Text>
          <Text fontSize="sm" color="gray.500">Data de nascimento: {birthdate}</Text>
        </Stack>
      </HStack>

      <Text fontSize="sm" color="gray.700" mt="2">
        <strong>{name_student}</strong> has requested to join your team. You can approve or decline their request.
      </Text>

      <HStack mt="4" gap={3}>
        <Button variant="outline" bg="red" flex="1" color={'white'}>
          Delete
        </Button>

        {/* Passando o ID do aluno para a função onClick */}
        <Button variant="outline" bg="blue" flex="1" color={'white'} onClick={() => onClick(id)}>
          Details
        </Button>
      </HStack>
    </Box>
  );
};
