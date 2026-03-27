"use client";

import {
  MantineProvider,
  Container,
  Box,
  Stack,
  Group,
  Title,
  Text,
  Button,
  Card,
  Badge,
  TextInput,
  Select,
  Checkbox,
  Avatar,
} from "@mantine/core";

/**
 * Demo component showing the configured theme in action
 */
function ThemeShowcase() {
  return (
    <Box bg="gray.0" min-h="100vh" py="xl">
      <Container size="lg">
        <Stack gap="xl">
          {/* Header */}
          <Box>
            <Title order={1} mb="xs">
              Theme Configuration Demo
            </Title>
            <Text size="lg" c="gray.6">
              Explore the custom Mantine theme with your brand colors and
              typography
            </Text>
          </Box>
          {/* Color Palette Section */}
          <Card>
            <Card.Section p="lg" bg="gray.0" mb="lg">
              <Title order={2} size="h3">
                Color Palette
              </Title>
            </Card.Section>
            <Card.Section p="lg">
              <Stack gap="lg">
                {/* Navy Color */}
                <Box>
                  <Text fw={600} mb="sm">
                    Navy (Primary)
                  </Text>
                  <Group gap="xs">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((shade) => (
                      <Box
                        key={shade}
                        w={50}
                        h={50}
                        bg={`navy.${shade}`}
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #e5e7eb",
                        }}
                        title={`navy.${shade}`}
                      />
                    ))}
                  </Group>
                </Box>
                {/* Teal Color */}
                <Box>
                  <Text fw={600} mb="sm">
                    Teal
                  </Text>
                  <Group gap="xs">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((shade) => (
                      <Box
                        key={shade}
                        w={50}
                        h={50}
                        bg={`teal.${shade}`}
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #e5e7eb",
                        }}
                        title={`teal.${shade}`}
                      />
                    ))}
                  </Group>
                </Box>
                {/* Coral Color */}
                <Box>
                  <Text fw={600} mb="sm">
                    Coral
                  </Text>
                  <Group gap="xs">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((shade) => (
                      <Box
                        key={shade}
                        w={50}
                        h={50}
                        bg={`coral.${shade}`}
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #e5e7eb",
                        }}
                        title={`coral.${shade}`}
                      />
                    ))}
                  </Group>
                </Box>
              </Stack>
            </Card.Section>
          </Card>
          {/* Typography Section */}
          <Card>
            <Card.Section p="lg" bg="gray.0" mb="lg">
              <Title order={2} size="h3">
                Typography
              </Title>
            </Card.Section>
            <Card.Section p="lg">
              <Stack gap="lg">
                <Box>
                  <Title order={1}>Heading 1 (h1)</Title>
                  <Text size="sm" c="gray.6">
                    Used for page titles - 2.5rem (40px), bold
                  </Text>
                </Box>
                <Box>
                  <Title order={2}>Heading 2 (h2)</Title>
                  <Text size="sm" c="gray.6">
                    Section headers - 2rem (32px), bold
                  </Text>
                </Box>
                <Box>
                  <Title order={3}>Heading 3 (h3)</Title>
                  <Text size="sm" c="gray.6">
                    Subsection headers - 1.5rem (24px), semibold
                  </Text>
                </Box>
                <Box>
                  <Text fw={600} size="lg">
                    Body Text Large
                  </Text>
                  <Text size="sm" c="gray.6">
                    1.125rem (18px)
                  </Text>
                </Box>
                <Box>
                  <Text>
                    Body Text Default - Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. This is standard paragraph text at 1rem
                    (16px).
                  </Text>
                </Box>
                <Box>
                  <Text size="sm">
                    Small Text - Used for helper text, captions, and secondary
                    information
                  </Text>
                </Box>
              </Stack>
            </Card.Section>
          </Card>
          {/* Components Section */}
          <Card>
            <Card.Section p="lg" bg="gray.0" mb="lg">
              <Title order={2} size="h3">
                Component Examples
              </Title>
            </Card.Section>
            <Card.Section p="lg">
              <Stack gap="lg">
                {/* Buttons */}
                <Box>
                  <Text fw={600} mb="sm">
                    Buttons
                  </Text>
                  <Group>
                    <Button>Default Button</Button>
                    <Button variant="light">Light Variant</Button>
                    <Button variant="outline">Outline Variant</Button>
                    <Button variant="gradient">Gradient Variant</Button>
                  </Group>
                </Box>
                {/* Badges */}
                <Box>
                  <Text fw={600} mb="sm">
                    Badges
                  </Text>
                  <Group>
                    <Badge>Default</Badge>
                    <Badge color="teal">Teal</Badge>
                    <Badge color="coral">Coral</Badge>
                    <Badge variant="filled">Filled</Badge>
                    <Badge variant="dot">With Dot</Badge>
                  </Group>
                </Box>
                {/* Inputs */}
                <Box>
                  <Text fw={600} mb="sm">
                    Form Inputs
                  </Text>
                  <Stack gap="md">
                    <TextInput
                      label="Text Input"
                      placeholder="Enter some text..."
                      description="This is a helpful description"
                    />
                    <Select
                      label="Select"
                      placeholder="Pick an option"
                      searchable
                      data={["Option 1", "Option 2", "Option 3"]}
                    />
                    <Checkbox label="Checkbox with custom theme" />
                  </Stack>
                </Box>
                {/* Avatar */}
                <Box>
                  <Text fw={606} mb="sm">
                    Avatar with Initials
                  </Text>
                  <Group>
                    <Avatar color="navy" radius="xl">
                      MK
                    </Avatar>
                    <Avatar color="teal" radius="xl">
                      JD
                    </Avatar>
                    <Avatar color="coral" radius="xl">
                      SM
                    </Avatar>
                  </Group>
                </Box>
              </Stack>
            </Card.Section>
          </Card>
          {/* Spacing Section */}
          <Card>
            <Card.Section p="lg" bg="gray.0" mb="lg">
              <Title order={2} size="h3">
                Spacing Scale
              </Title>
            </Card.Section>
            <Card.Section p="lg">
              <Stack gap="md">
                <Group gap={0}>
                  {["xs", "sm", "md", "lg", "xl"].map((size) => (
                    <Box key={size}>
                      <Text size="sm" fw={500} mb="xs">
                        {size}
                      </Text>
                      <Box
                        w={60}
                        h={60}
                        bg="navy.1"
                        style={{
                          border: "2px solid var(--mantine-color-navy-6)",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "12px",
                          fontWeight: 600,
                        }}
                      >
                        {size}
                      </Box>
                    </Box>
                  ))}
                </Group>
              </Stack>
            </Card.Section>
          </Card>
          {/* Usage Guide */}
          <Card>
            <Card.Section p="lg" bg="gray.0" mb="lg">
              <Title order={2} size="h3">
                How to Use the Theme
              </Title>
            </Card.Section>
            <Card.Section p="lg">
              <Stack gap="md">
                <Box>
                  <Text fw={600} mb="xs">
                    1. Import in Your App
                  </Text>
                  <Text
                    size="sm"
                    c="gray.7"
                    component="code"
                    bg="gray.0"
                    p="sm"
                    style={{ display: "block" }}
                  >
                    import {"{theme}"} from './theme'
                  </Text>
                </Box>
                <Box>
                  <Text fw={600} mb="xs">
                    2. Wrap with MantineProvider
                  </Text>
                  <Text
                    size="sm"
                    c="gray.7"
                    component="code"
                    bg="gray.0"
                    p="sm"
                    style={{ display: "block" }}
                  >
                    &lt;MantineProvider theme={"{theme}"}&gt;
                    <br />
                    &lt;App /&gt;
                    <br />
                    &lt;/MantineProvider&gt;
                  </Text>
                </Box>
                <Box>
                  <Text fw={600} mb="xs">
                    3. Use Colors
                  </Text>
                  <Text
                    size="sm"
                    c="gray.7"
                    component="code"
                    bg="gray.0"
                    p="sm"
                    style={{ display: "block" }}
                  >
                    &lt;Button color="navy"&gt;Click me&lt;/Button&gt;
                    <br />
                    &lt;Text c="teal.6"&gt;Styled text&lt;/Text&gt;
                  </Text>
                </Box>
                <Box>
                  <Text fw={600} mb="xs">
                    4. Access Theme in Components
                  </Text>
                  <Text
                    size="sm"
                    c="gray.7"
                    component="code"
                    bg="gray.0"
                    p="sm"
                    style={{ display: "block" }}
                  >
                    import {"{useMantineTheme}"} from '@mantine/core'
                    <br />
                    const theme = useMantineTheme()
                  </Text>
                </Box>
              </Stack>
            </Card.Section>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}

export default ThemeShowcase;
