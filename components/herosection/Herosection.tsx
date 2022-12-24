import { Button, Center, Stack, Text, Title } from "@mantine/core";
import { IconAffiliate, IconRollercoaster } from "@tabler/icons";

export default function Herosection() {
  return (
    <Center
      style={{
        height: "90vh"
      }}
    >
      <Stack align="center" spacing="sm">

        <IconRollercoaster size={45} />
        <Title size="h1" align="center">Transform With Our Solutions</Title>
        <Text> Make every experience enjoyable with our innovative solution </Text>
        <Text> We&apos;re are here for you, always </Text>
        <Button
          variant="gradient"
          gradient={{ from: 'blue', to: 'teal' }}
          leftIcon={<IconAffiliate />}
        >Contact Us</Button>

      </Stack>

    </Center>
  )
}
