"use client";

import { useState } from "react";
import {
  Container,
  Title,
  TextInput,
  Button,
  Stack,
  Group,
  Paper,
  Text,
  ActionIcon,
  Checkbox,
  Badge,
  Transition,
  rem,
} from "@mantine/core";
// import { IconTrash, IconPlus, IconCheck } from '@tabler/icons-react';
import { useListState, randomId } from "@mantine/hooks";

// types/todo.ts
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function TodoPage() {
  const [todoValue, setTodoValue] = useState("");

  // Mantine hook for easy list management
  const [todos, handlers] = useListState<Todo>([
    { id: randomId(), text: "Configure Mantine Theme", completed: true },
    { id: randomId(), text: "Build Todo App", completed: false },
  ]);

  const addTodo = () => {
    if (todoValue.trim().length > 0) {
      handlers.append({
        id: randomId(),
        text: todoValue,
        completed: false,
      });
      setTodoValue("");
    }
  };

  const items = todos.map((todo, index) => (
    <Paper
      key={todo.id}
      withBorder
      p="md"
      radius="md"
      shadow="xs"
      style={(theme) => ({
        // Using your custom transition and hover logic
        transition: theme.other.transitionBase,
        opacity: todo.completed ? 0.7 : 1,
        backgroundColor: todo.completed
          ? "var(--mantine-color-gray-0)"
          : "white",
      })}
    >
      <Group justify="space-between">
        <Group>
          <Checkbox
            checked={todo.completed}
            onChange={() =>
              handlers.setItemProp(index, "completed", !todo.completed)
            }
            color="teal" // Using your custom teal palette
            size="md"
          />
          <Text
            td={todo.completed ? "line-through" : undefined}
            c={todo.completed ? "dimmed" : "black"}
            fw={500}
          >
            {todo.text}
          </Text>
        </Group>

        <ActionIcon
          variant="subtle"
          color="coral" // Using your custom coral palette
          onClick={() => handlers.remove(index)}
          title="Delete todo"
        >
          ⛔
        </ActionIcon>
      </Group>
    </Paper>
  ));

  return (
    <Container size="sm" py="xl">
      <Paper p="xl" radius="lg" withBorder shadow="md">
        <Stack gap="lg">
          <Group justify="space-between">
            <Title order={2} c="navy.7">
              Task Manager
            </Title>
            <Badge size="lg" color="navy" variant="light">
              {todos.filter((t) => !t.completed).length} Tasks Left
            </Badge>
          </Group>

          <Group align="flex-end">
            <TextInput
              placeholder="What needs to be done?"
              label="New Todo"
              value={todoValue}
              onChange={(event) => setTodoValue(event.currentTarget.value)}
              onKeyDown={(event) => event.key === "Enter" && addTodo()}
              style={{ flex: 1 }}
              // Your custom TextInput focus styles will apply here automatically
            />
            <Button
              onClick={addTodo}
              //   leftSection={<IconPlus size={18} />}
              color="navy"
            >
              Add
            </Button>
          </Group>

          <Stack gap="sm" mt="md">
            {items.length > 0 ? (
              items
            ) : (
              <Text c="dimmed" ta="center" py="xl">
                No tasks yet. Enjoy your free time!
              </Text>
            )}
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
}
