import { Navbar, NavLink, ScrollArea, Button } from "@mantine/core"
import { Icon360, Icon3dCubeSphere, IconAddressBook, IconBadges, IconBrandBlogger, IconCash, IconHome2, IconWreckingBall } from "@tabler/icons"
import { useRouter } from "next/router"
import { useEffect } from "react";

export default function NavBar({ isHidden }: { isHidden: boolean }) {
  const router = useRouter();

  const navLinkData = [
    { href: '/', label: 'Home', icon: <IconHome2 /> },
    { href: '/solutions', label: 'Solutions', icon: <Icon3dCubeSphere /> },
    { href: '/process', label: 'Process', icon: <Icon360 /> },
    { href: '/pricing', label: 'Pricing', icon: <IconCash /> },
    { href: '/blogs', label: 'Blogs', icon: <IconBrandBlogger /> },
    { href: '/aboutus', label: 'About Us', icon: <IconBadges /> },
    { href: '/contactus', label: 'Contact Us', icon: <IconAddressBook /> },
  ]

  // const { isDarkMode } = useUserOptionContext();

  return (
    <Navbar
      width={{ base: 300 }}
      hiddenBreakpoint="sm"
      hidden={isHidden}
    >

      <Navbar.Section grow component={ScrollArea} m="xs" p="xs">
        {
          navLinkData.map((link, index) => (
            <NavLink
              component="a"
              href={link.href}
              label={link.label}
              icon={link.icon}
              active={link.href === router.asPath}
              style={{ borderRadius: '5px' }}
            />
          ))
        }
      </Navbar.Section>

      <Navbar.Section m="xs">
        <Button
          leftIcon={<IconWreckingBall size={16} />}
          color="red"
          variant="subtle"
          fullWidth
        >
          Website is in progress
        </Button>
      </Navbar.Section>

    </Navbar>
  )
};
