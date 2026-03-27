// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

// Simple in-memory store for development
let mockTodos: Todo[] = [
  { id: "1", text: "Configure Mantine Theme", completed: true },
  { id: "2", text: "Build Todo App", completed: false },
];

export const handlers = [
  // GET /tasks
  http.get("/api/tasks", () => {
    return HttpResponse.json(mockTodos);
  }),

  // POST /tasks
  http.post("/api/tasks", async ({ request }) => {
    const newTodo = (await request.json()) as Todo;
    mockTodos.push(newTodo);
    return HttpResponse.json(newTodo, { status: 201 });
  }),

  // DELETE /tasks/:id
  http.delete("/api/tasks/:id", ({ params }) => {
    const { id } = params;
    mockTodos = mockTodos.filter((t) => t.id !== id);
    return new HttpResponse(null, { status: 204 });
  }),

  http.patch("/api/tasks/:id", async ({ params, request }) => {
    const { id } = params;
    const updates = (await request.json()) as Partial<Todo>;

    const index = mockTodos.findIndex((t) => t.id === id);

    if (index !== -1) {
      mockTodos[index] = { ...mockTodos[index], ...updates };
      return HttpResponse.json(mockTodos[index]);
    }

    return new HttpResponse(null, { status: 404 });
  }),
];
