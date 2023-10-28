import { Switch, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
// -------------------------------------------------------------------------------------------------------------

import { useEagerConnect } from "hooks/useEagerConnect";
// -------------------------------------------------------------------------------------------------------------

import Toaster from "components/Toaster";
import AuthGuard from "components/AuthGuard";

import "styles/index.scss";
import SuspenseLoader from "components/SuspenseLoader";
// -------------------------------------------------------------------------------------------------------------

const HomePage = lazy(() => import("pages"));
const MintPage = lazy(() => import("pages/mint"));
const MarketPlace = lazy(() => import("pages/marketPlace"));
const ProfilePage = lazy(() => import("pages/profile"));
const NewsArticle = lazy(() => import("pages/newsArticle"));
const Articles = lazy(() => import("pages/articles"));
// -------------------------------------------------------------------------------------------------------------

function App() {
  const location = useLocation();
  useEagerConnect();

  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Toaster />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/news/:id" component={NewsArticle} />
          <Route exact path="/market" component={MarketPlace} />
          <Route exact path="/mint" component={MintPage} />
          <Route exact path="/articles" component={Articles} />
          <Route
            exact
            path="/profile"
            render={() => (
              <AuthGuard>
                <ProfilePage />
              </AuthGuard>
            )}
          />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
