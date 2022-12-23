import { ActionIcon, Flex, Navbar, NavLink, ScrollArea, Title, Text } from "@mantine/core"
import { Icon360, Icon3dCubeSphere, IconAddressBook, IconBadges, IconCash, IconHeart, IconHome2, IconMoonStars, IconSun } from "@tabler/icons"

export default function NavBar({ isHidden }: { isHidden: boolean }) {

  // const { isDarkMode } = useUserOptionContext();

  return (
    <Navbar
      width={{ base: 300 }}
      hiddenBreakpoint="sm"
      hidden={isHidden}
    >

      <Navbar.Section grow component={ScrollArea} m="xs" p="xs">
        <NavLink component="a" href="/" label="Home" icon={<IconHome2 />} color="orange" />
        <NavLink component="a" href="/solutions" label="Solutions" icon={<Icon3dCubeSphere />} color="orange" />
        <NavLink component="a" href="/process" label="Process" icon={<Icon360 />} />
        <NavLink component="a" href="/pricing" label="Pricing" icon={<IconCash />} />
        <NavLink component="a" href="" label="About Us" icon={<IconBadges />} />
        <NavLink component="a" href="" label="Contact Us" icon={<IconAddressBook />} />
      </Navbar.Section>

      <Navbar.Section m="xs">
        <Text color="gray">
          Made with <IconHeart size={15} fill="#FF6D6D" color="#FF6D6D" /> by Griiken
        </Text>
      </Navbar.Section>

    </Navbar>
  )
};
