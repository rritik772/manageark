import { Card, SimpleGrid, Text, Title } from "@mantine/core";

export default function AvaliableSolution() {
  return (
    <SimpleGrid
      mb="5rem"
      cols={4}
      breakpoints={[
        { maxWidth: 'sm', cols: 1 },
        { maxWidth: 'md', cols: 2, spacing: 'xl' },
        { maxWidth: 'lg', cols: 4, spacing: 'xl' }
      ]}
    >
      <Card shadow="md" radius="lg" withBorder>
        <Text fz="lg" className="dmb">Software Solution</Text>
        <Text>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</Text>
      </Card>

      <Card shadow="md" radius="lg" withBorder>
        <Text fz="lg" className="dmb">Software Solution</Text>
        <Text>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</Text>
      </Card>

      <Card shadow="md" radius="lg" withBorder>
        <Text fz="lg" className="dmb">Software Solution</Text>
        <Text>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</Text>
      </Card>

      <Card shadow="md" radius="lg" withBorder>
        <Text fz="lg" className="dmb">Software Solution</Text>
        <Text>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</Text>
      </Card>

      <Card shadow="md" radius="lg" withBorder>
        <Text fz="lg" className="dmb">Software Solution</Text>
        <Text>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</Text>
      </Card>

      <Card shadow="md" radius="lg" withBorder>
        <Text fz="lg" className="dmb">Software Solution</Text>
        <Text>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</Text>
      </Card>

    </SimpleGrid>
  )
}
