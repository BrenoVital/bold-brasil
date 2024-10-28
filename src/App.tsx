import "antd/dist/reset.css";
import "@fontsource/nunito";
import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./data/libs/queryClient";

export default function App() {
  return (
    <HelmetProvider>
      <ConfigProvider
        locale={ptBR}
        theme={{ token: { fontFamily: "Nunito, sans-serif" ,} }}
      >
        <Helmet titleTemplate="%s | Template AntDesign" />
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <MainRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </ConfigProvider>
    </HelmetProvider>
  );
}
