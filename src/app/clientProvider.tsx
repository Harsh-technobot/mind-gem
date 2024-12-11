"use client";

import { Provider } from 'react-redux';
import store from './store';
import { ReactNode } from 'react';

const ClientProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (<Provider store={store}>{children}</Provider>);
};

export default ClientProvider;