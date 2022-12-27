import { Anchor, Card, Group, Text, ThemeIcon, Title } from "@mantine/core";
import { IconArrowBounce } from "@tabler/icons";
import BottomBar from "../components/bottombar/BottomBar";
import AvaliableSolution from "../components/solutions/AvaliableSolutions";

export default function Solutions() {
  return (
    <div style={{ marginLeft: '1rem' }}>
      <Title>Our Projects</Title>
      <Card my="1rem" shadow="md" p="lg" radius="lg" withBorder w="20rem">

        <Group align="end" position="apart">
          <Text fz="lg" className="dmb">Manage Ark</Text>
          <Anchor align="center" component="a" href="https://www.google.com">
            <IconArrowBounce />
          </Anchor>
        </Group>
        <Text>This is our first project which is enterly based on the theme earth</Text>

      </Card>

      <Title mb="1rem" mt="4rem">We provide solution for</Title>
      <AvaliableSolution />
      <BottomBar />
    </div>
  )
}
