import { Provider as ReduxProvider } from "react-redux";
import App from "../App.jsx";
import useAxiosWithRefresh from "../Protected/useAxiosWithRefresh.js";
import { initializeStore } from "../tools/store.jsx";

const AppInitializer = () => {
  const axiosInstanceWithRefresh = useAxiosWithRefresh();

  const store = initializeStore(axiosInstanceWithRefresh);

  return (
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  );
};

export default AppInitializer;
