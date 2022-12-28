import { Button, Card, Flex, Group, Text, Title } from "@mantine/core";

export default function PricingSpec() {
    return (
        <Flex
            mt="xl"
            align="center"
            gap="22px"
            justify="center"
        >

            {/* Card 1 */}

            <Card maw="400px" withBorder shadow="lg" p="lg">

                <Card.Section>
                    <div style={{
                        width: '100%',
                        height: '130px',
                        backgroundColor: 'hsl(320, 40%, 30%)'
                    }} />
                </Card.Section>

                <Group mt="lg">
                    <Title size="h2">Basic</Title>
                    <Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic provident, laboriosam omnis deserunt doloribus exercitationem, cumque debitis molestias modi facilis earum necessitatibus accusamus velit eius ad possimus quos sed. Totam?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic provident, laboriosam omnis deserunt doloribus exercitationem, cumque debitis molestias modi facilis earum necessitatibus accusamus velit eius ad possimus quos sed. Totam?
                    </Text>
                    <Button fullWidth size="lg" variant="gradient">Perfect</Button>
                </Group>

            </Card>

            {/* Card 2 */}

            <Card maw="400px" withBorder style={{ transform: 'scale(1.10)' }} shadow="lg" p="lg">

                <Card.Section>
                    <div style={{
                        width: '100%',
                        height: '200px',
                        backgroundColor: 'hsl(320, 40%, 30%)'
                    }} />
                </Card.Section>

                <Group mt="lg">
                    <Title size="h2">Pro</Title>
                    <Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic provident, laboriosam omnis deserunt doloribus exercitationem, cumque debitis molestias modi facilis earum necessitatibus accusamus velit eius ad possimus quos sed. Totam?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic provident, laboriosam omnis deserunt doloribus exercitationem, cumque debitis molestias modi facilis earum necessitatibus accusamus velit eius ad possimus quos sed. Totam?
                    </Text>
                    <Button fullWidth size="lg" variant="gradient">Amazing</Button>
                </Group>

            </Card>

            {/* Card 3 */}
            <Card maw="400px" withBorder shadow="lg" p="lg">

                <Card.Section>
                    <div style={{
                        width: '100%',
                        height: '130px',
                        backgroundColor: 'hsl(320, 40%, 30%)'
                    }} />
                </Card.Section>

                <Group mt="lg">
                    <Title size="h2">Elite</Title>
                    <Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic provident, laboriosam omnis deserunt doloribus exercitationem, cumque debitis molestias modi facilis earum necessitatibus accusamus velit eius ad possimus quos sed. Totam?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic provident, laboriosam omnis deserunt doloribus exercitationem, cumque debitis molestias modi facilis earum necessitatibus accusamus velit eius ad possimus quos sed. Totam?
                    </Text>
                    <Button fullWidth size="lg" variant="gradient">Fantastic</Button>
                </Group>

            </Card>

        </Flex>
    )
}