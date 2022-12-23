import { Badge, Button, Card, Center, Flex, Group, Space, Text, ThemeIcon, Title } from "@mantine/core";
import { IconAbacus, IconAntenna, IconPlaneDeparture } from "@tabler/icons";

export default function OurFeature() {
  return (
    <Flex
      direction="column"
      align="center"
      gap={20}
      mt="2rem"
    >
      <Title size="h2">Our Features</Title>
      <Flex
        align="center"
        wrap="wrap"
        justify="center"
        gap={10}
      >

        <Card shadow="lg" p="lg" radius="md" withBorder w="15rem">
          <Group position="apart" mb="xs" align="center">
            <ThemeIcon size="xl" variant="gradient">
              <IconAbacus size={30} />
            </ThemeIcon>
          </Group>

          <Group position="apart" mt="md" mb="xs">
            <Text size="xl" weight={700}>60%</Text>
          </Group>

          <Text size="sm" color="dimmed">
            Faster & Accurate
          </Text>
          <Text size="sm" color="dimmed">
            THAN OUR COMPETITION
          </Text>

        </Card>

        <Space w="lg" />

        <Card shadow="sm" p="lg" radius="md" withBorder w="15rem">
          <Group position="apart" mb="xs" align="center">
            <ThemeIcon size="xl" variant="gradient">
              <IconPlaneDeparture size={30} />
            </ThemeIcon>
          </Group>

          <Group position="apart" mt="md" mb="xs">
            <Text size="xl" weight={700}>60%</Text>
          </Group>

          <Text size="sm" color="dimmed">
            Better performance
          </Text>
          <Text size="sm" color="dimmed">
            BEST IN CLASS SOLUTIONS
          </Text>

        </Card>

        <Space w="lg" />

        <Card shadow="sm" p="lg" radius="md" withBorder w="15rem">
          <Group position="apart" mb="xs" align="center">
            <ThemeIcon size="xl" variant="gradient">
              <IconAntenna size={30} />
            </ThemeIcon>
          </Group>

          <Group position="apart" mt="md" mb="xs">
            <Text size="xl" weight={700}>60%</Text>
          </Group>

          <Text size="sm" color="dimmed">
            We Have Zero Competition
          </Text>
          <Text size="sm" color="dimmed">
            ALWAYS FIRST
          </Text>

        </Card>

        <Space w="lg" />

      </Flex>

    </Flex>
  )
}
