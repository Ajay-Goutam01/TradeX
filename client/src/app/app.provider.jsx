import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import App from "./App";
import { store } from "./app.store";

import AuthInitializer from "../features/auth/components/AuthInitializer";

function AppProvider() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <AuthInitializer> */}
          <App />
        {/* </AuthInitializer> */}

        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </BrowserRouter>
    </Provider>
  );
}

export default AppProvider;