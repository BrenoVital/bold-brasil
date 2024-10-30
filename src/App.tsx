import "antd/dist/reset.css";
import "@fontsource/nunito";
import { ConfigProvider, App as AntdApp, Watermark } from "antd";
import ptBR from "antd/lib/locale/pt_BR";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./shared/libs/queryClient";
import { useAuthStore } from "./shared/store/authStore";

export default function App() {
  const { user } = useAuthStore();
  return (
    <HelmetProvider>
      <ConfigProvider
        locale={ptBR}
        theme={{ token: { fontFamily: "Nunito, sans-serif" } }}
      >
        <AntdApp>
          <Helmet titleTemplate="%s | Sistema parceiros" />
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Watermark content={user}>
                <MainRoutes />
              </Watermark>
            </BrowserRouter>
          </QueryClientProvider>
        </AntdApp>
      </ConfigProvider>
    </HelmetProvider>
  );
}
