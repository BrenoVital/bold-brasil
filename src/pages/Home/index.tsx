import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  XAxis,
  YAxis,
  Bar,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import { partnerService } from "../../Partner/services";
import { companyService } from "../../ExternalCompany/services";
import { Col, Row } from "antd";
import TitleHeader from "../../shared/components/TitleHeader";

export default function Home() {
  const partner = useQuery({
    queryKey: ["partners"],
    queryFn: () => partnerService.getAll(),
  });

  const company = useQuery({
    queryKey: ["company"],
    queryFn: () => companyService.getAll(),
  });

  const totalPartners = partner.data ? partner.data.length : 0;

  const activeCompanies = company.data
    ? company.data.filter((company: any) => company.isActive).length
    : 0;
  const inactiveCompanies = company.data
    ? company.data.length - activeCompanies
    : 0;

  const data = [
    { name: "Empresas Ativas", Quantidade: activeCompanies },
    { name: "Empresas Inativas", Quantidade: inactiveCompanies },
    { name: "Parceiros", Quantidade: totalPartners },
  ];

  const COLORS = ["#4CAF50", "#F44336", "#2196F3"];

  return (
    <Col span={24}>
      <TitleHeader title="Relatórios" />
      <Row
        gutter={16}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="Quantidade"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
        <ResponsiveContainer width="50%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Quantidade" fill="#8884d8">
              {data.map((_, index) => (
                <Cell
                  key={`cell-bar-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Row>
    </Col>
  );
}
