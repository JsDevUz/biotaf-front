import { AnimatePresence, motion } from "framer-motion";
import { Suspense } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import MainPage from "../modules";
import ProductPage from "../modules/product";
const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } },
};

function RoutesComponent() {
  const location = useLocation();

  const myRouters = useRoutes([
    { path: "", element: <MainPage />, children: [] },
    { path: "products/:id", element: <ProductPage />, children: [] },
  ]);

  return (
    <Suspense fallback={<>Loading..</>}>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {myRouters}
        </motion.div>
      </AnimatePresence>
    </Suspense>
  );
}

export default RoutesComponent;
