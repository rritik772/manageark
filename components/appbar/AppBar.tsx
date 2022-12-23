import { ActionIcon, Burger, Flex, Header, MediaQuery, Title } from "@mantine/core";
import { IconMoonStars } from "@tabler/icons";
import { FC } from "react";

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
          style={{ width: '100%' }}
        >

          <Title order={2}>Griiken</Title>

          <ActionIcon>
            <IconMoonStars />
          </ActionIcon>

          {/* <ActionIcon>
            <IconSun />
          </ActionIcon> */}


        </Flex>
      </div>
    </Header>

  )
}

export default AppBar;
