import { Affix, Anchor, Button, Flex, NavLink, SimpleGrid, Text, TextInput, Textarea, ThemeIcon, Title, Input, Avatar, UnstyledButton, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAt, IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconMessage, IconMessageCircle } from "@tabler/icons";

export default function BottomBar() {
  const form = useForm({
    initialValues: {
      email: '',
      comments: ''
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      comments: (value) => (value.length > 10 ? null : 'Comment should be longer')
    }
  });

  return (
    <SimpleGrid
      mt="7rem"
      mb="5rem"
      cols={3}
      spacing="lg"
      breakpoints={[
        { maxWidth: 'sm', cols: 1, spacing: 'xl' },
        { maxWidth: 'md', cols: 2, spacing: 'xl' },
        { maxWidth: 'lg', cols: 3, spacing: 'xl' }
      ]}
    >

      <Flex
        direction="column"
      >
        <Title mb={0}>Get In Touch</Title>

        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            icon={<IconAt size={15} />}
            type="email"
            label="Email"
            withAsterisk
            placeholder="Your email"
            {...form.getInputProps('email')}
            mb="7px"
          />

          <Textarea
            icon={<IconMessageCircle />}
            placeholder="Your comment"
            label="Comments"
            withAsterisk
            {...form.getInputProps('comment')}
            mb="7px"
          />

          <Button variant="gradient" type="submit">Send</Button>
        </form>

      </Flex>

      <Flex
        direction="column"
      >
        <Title mb={10}>Company</Title>

        <Anchor component="a" href="/solutions">
          Solution
        </Anchor>
        <Anchor component="a" href="/aboutus">
          About Us
        </Anchor>
        <Anchor component="a" href="/process">
          Process
        </Anchor>
        <Anchor component="a" href="/pricing">
          Pricing
        </Anchor>

      </Flex>

      <Flex
        direction="column"
      >
        <Title mb={10}>Follow Us On</Title>

        <Flex gap={10}>
          <Anchor component="a" color="#4267B2" variant="gradient">
            <IconBrandFacebook />
          </Anchor>

          <Anchor component="a" color="#1DA1F2" variant="gradient">
            <IconBrandTwitter />
          </Anchor>

          <Anchor component="a" color="#0077B5" variant="gradient">
            <IconBrandLinkedin />
          </Anchor>

          <Anchor component="a" variant="gradient">
            <IconBrandInstagram />
          </Anchor>
        </Flex>

        <UnstyledButton component="a" href="mailto:grikken@gmail.com" mt={10}>
          <Text>Email</Text>
          <Text size="xs" color="dimmed">grikken@gmail.com</Text>
        </UnstyledButton>

        <UnstyledButton component="a" href="tel:+911234567897" mt={10}>
          <Text>Phone</Text>
          <Text size="xs" color="dimmed">+911234567897</Text>
        </UnstyledButton>
      </Flex>

    </SimpleGrid>
  )
}
