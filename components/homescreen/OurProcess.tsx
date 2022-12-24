import { Button, Center, Flex, Group, Stepper, Title } from "@mantine/core";
import { useState } from "react";

export default function OutProcess() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Flex
      direction="column"
      mt="10rem"
      align="center"
      justify="center"
      gap={15}
      mih="50vh"
    >
      <Title size="h2">Our Process</Title>

      <Center mt={25}>

        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="Meeting" description="Create a interactive meeting">
            Get all the requirement & expectations
          </Stepper.Step>

          <Stepper.Step label="Design & Prototype" description="Application design prototype">
            Design the application
          </Stepper.Step>

          <Stepper.Step label="Review & Update" description="Customer revisions">
            A working model
          </Stepper.Step>

          <Stepper.Step label="Development & Deploy " description="We have done it!">
            Development & Deploy
          </Stepper.Step>

          <Stepper.Completed>
            Development & Deploy
          </Stepper.Completed>
        </Stepper>

      </Center>
      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
        <Button variant="gradient" component="a" href="/process">Our Full Process</Button>
      </Group>

    </Flex>
  )
}
