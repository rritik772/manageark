import pnglogo from './../../assets/logo/logo-no-background.png';
import Image from 'next/image';
import { ActionIcon, Burger, Flex, Header, MediaQuery, Title } from "@mantine/core";
import { FC } from "react";
import { IconMoonStars } from "@tabler/icons";

interface AppBarProps {
  isHidden: boolean,
  setIsHidden: (e: boolean) => void
}

const AppBar: FC<AppBarProps> = ({ isHidden, setIsHidden }) => {

  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: "100%",
          height: '100%'
        }}>

        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={!isHidden}
            onClick={() => setIsHidden(!isHidden)}
            size="sm"
            mr="xl"
          />
        </MediaQuery>

        <Flex
          justify="space-between"
          align="center"
          style={{ width: '100%' }}
        >

          <Image src={pnglogo} width={200} alt="logo" />

          <ActionIcon>
            <IconMoonStars />
          </ActionIcon>

          {/* <ActionIcon>
            <IconSun />
          </ActionIcon> */}


        </Flex>
      </div>
    </Header >

  )
}

export default AppBar;
