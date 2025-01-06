import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import Router from "./Router";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<></>}>
        <Router />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
