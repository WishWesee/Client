import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { NavermapsProvider } from "react-naver-maps";
import Router from "./Router";

function App() {
  const queryClient = new QueryClient();
  const naverKey = import.meta.env.VITE_NAVER_KEY;

  return (
    <QueryClientProvider client={queryClient}>
      <NavermapsProvider ncpClientId={naverKey}>
        <Suspense fallback={<></>}>
          <Router />
        </Suspense>
      </NavermapsProvider>
    </QueryClientProvider>
  );
}

export default App;
