'use client'
import { Button, Box, HStack, Stack, Text } from "@chakra-ui/react";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo?: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface CardStudentProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: Address;
  phone: string;
  website: string;
  company?: Company;
  onClick: (id: number) => void; // Ajustado para receber o ID do aluno como argumento
}

export const CardStudent = ({ id, name, username, email, address, phone, website, onClick }: CardStudentProps) => {

  return (
    <Box maxW="320px" borderRadius="lg" boxShadow="sm" overflow="hidden" p="4" bg="white" border="1px solid" borderColor="gray.200">
      <HStack mb="4" gap={2} align="center">
        <Stack gap={1}>
          <Text fontWeight="semibold" fontSize="lg">{name}</Text>
          <Text fontSize="sm" color="gray.500">{username}</Text>
          <Text fontSize="sm" color="gray.500">{email}</Text>
          <Text fontSize="sm" color="gray.500">Telefone: {phone}</Text>
          <Text fontSize="sm" color="gray.500">Site: {website}</Text>
        </Stack>
      </HStack>

      <Text fontSize="sm" color="gray.700" mt="2">
        <strong>{username}</strong> has requested to join your team. You can approve or decline their request.
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
