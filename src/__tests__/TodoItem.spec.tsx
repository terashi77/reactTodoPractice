import * as React from 'react';
import { render, screen } from '@testing-library/react';
import TodoItem from '../components/TodoItem';
import { TodoItemInterface } from '../interfaces/TodoItemInterface';
import { TodoInterface } from '../interfaces/TodoInterface';

describe('TodoItem', () => {
  it('displays button for detail page', () => {
    const todo: TodoInterface = {
      id: '',
      title: 'タスクタイトル',
      detail: 'タスク詳細',
    };
    const todoItemProps: TodoItemInterface = {
      todo: todo,
      handleTodoUpdate: () => {},
      handleTodoRemove: () => {},
    };
    render(<TodoItem {...todoItemProps} />);

    expect(screen.getByText('詳細')).toBeInTheDocument;
  });
  it('displays button for detail page', () => {
    const todo: TodoInterface = {
      id: '',
      title: 'タスクタイトル',
      detail: 'タスク詳細',
    };
    const todoItemProps: TodoItemInterface = {
      todo: todo,
      handleTodoUpdate: () => {},
      handleTodoRemove: () => {},
    };
    render(<TodoItem {...todoItemProps} />);

    expect(screen.getByText('削除')).toBeInTheDocument;
  });
});
