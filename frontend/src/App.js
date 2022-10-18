import ReactGA from "react-ga";
import { useEffect, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import ErrorPage from "pages/error";
import SuspenseFallback from "components/suspense";
import AppRoutes from "routes";
const TRACKING_ID = "UA-243699135-1"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const App = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);


  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <BrowserRouter>
        <Suspense fallback={<SuspenseFallback />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
