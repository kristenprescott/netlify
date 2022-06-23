import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./app/App";
import store from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);
