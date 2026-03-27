"use client";

import { useState, useEffect } from "react";
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
  Loader,
  Center,
  rem,
} from "@mantine/core";
// import { IconTrash, IconPlus } from '@tabler/icons-react';
import { useListState, randomId } from "@mantine/hooks";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function TodoPage() {
  const [todoValue, setTodoValue] = useState("");
  const [loading, setLoading] = useState(true);

  // Use Mantine's list handler for UI state
  const [todos, handlers] = useListState<Todo>([]);

  // 1. GET - Fetch initial todos on mount
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const response = await fetch("/api/tasks");
        const data = await response.json();
        handlers.setState(data);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, []);

  // 2. POST - Add a new todo
  const handleAddTodo = async () => {
    if (todoValue.trim().length === 0) return;

    const newTodo: Todo = {
      id: randomId(),
      text: todoValue,
      completed: false,
    };

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });

      if (response.ok) {
        handlers.append(newTodo);
        setTodoValue("");
      }
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // 3. DELETE - Remove a todo
  const handleDelete = async (id: string, index: number) => {
    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        handlers.remove(index);
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  // 4. Update UI logic (Local only for this demo, or add a PATCH endpoint)
  const toggleStatus = async (id: string, index: number) => {
    const currentTodo = todos[index];
    const newStatus = !currentTodo.completed;

    try {
      // Optimistic UI update (optional, but makes the app feel snappier)
      handlers.setItemProp(index, "completed", newStatus);

      const response = await fetch(`/api/tasks/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: newStatus }),
      });

      if (!response.ok) {
        // Revert if the "server" fails
        handlers.setItemProp(index, "completed", currentTodo.completed);
        console.error("Failed to update todo on server");
      }
    } catch (error) {
      handlers.setItemProp(index, "completed", currentTodo.completed);
      console.error("Error patching todo:", error);
    }
  };

  if (loading) {
    return (
      <Center style={{ height: "50vh" }}>
        <Loader color="navy" size="lg" />
      </Center>
    );
  }

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
              onChange={(e) => setTodoValue(e.currentTarget.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
              style={{ flex: 1 }}
            />
            <Button
              onClick={handleAddTodo}
              // leftSection={<IconPlus size={18} />}
              color="navy"
            >
              Add
            </Button>
          </Group>

          <Stack gap="sm" mt="md">
            {todos.length > 0 ? (
              todos.map((todo, index) => (
                <Paper
                  key={todo.id}
                  withBorder
                  p="md"
                  radius="md"
                  shadow="xs"
                  style={(theme) => ({
                    transition: theme.other.transitionBase,
                    opacity: todo.completed ? 0.7 : 1,
                  })}
                >
                  <Group justify="space-between">
                    <Group>
                      <Checkbox
                        checked={todo.completed}
                        onChange={() => toggleStatus(todo.id, index)}
                        color="teal"
                      />
                      <Text
                        td={todo.completed ? "line-through" : undefined}
                        fw={500}
                      >
                        {todo.text}
                      </Text>
                    </Group>

                    <ActionIcon
                      variant="subtle"
                      color="coral"
                      onClick={() => handleDelete(todo.id, index)}
                    >
                      ␡
                    </ActionIcon>
                  </Group>
                </Paper>
              ))
            ) : (
              <Text c="dimmed" ta="center" py="xl">
                No tasks yet.
              </Text>
            )}
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
}
