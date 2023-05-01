import { QueryClient, QueryClientProvider } from 'react-query';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import { prettyFormat } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

export const renderComponent = (children: React.ReactElement) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  const options = render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MemoryRouter>
  );

  return {
    ...options,
    debug: (el?: HTMLElement, maxLength = 300000, opt?: prettyFormat.OptionsReceived) =>
      options.debug(el, maxLength, opt),
  };
};

export const clickByTestId = async (testId: string) => {
  return userEvent.click(screen.getByTestId(testId));
};

export const changeTextFieldByTestId = async (testId: string, text: string) => {
  return userEvent.type(screen.getByTestId(testId, { exact: false }), text);
};
