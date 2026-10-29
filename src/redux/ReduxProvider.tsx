"use client";

import { useState, type ReactNode } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { makeStore } from "./store";

export default function ReduxProvider({ children }: { children: ReactNode }) {
  const [store] = useState(makeStore);
  const [persistor] = useState(() => persistStore(store));
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
