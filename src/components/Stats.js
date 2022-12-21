import styled from "styled-components";
import StatsCard from "./StatsCard";
import { labels } from "../services/labels";
import { state } from "../services/store";
import { useSnapshot } from "valtio";

const Stats = () => {
  const { locale } = useSnapshot(state);

  const i18n = (word) => {
    return labels[locale][word];
  };

  return (
    <StatsContainer>
      {dash.map(({ icon, figure, title }, i) => (
        <StatsCard icon={icon} figure={figure} title={i18n(title)} key={i} />
      ))}
    </StatsContainer>
  );
};
export default Stats;

const StatsContainer = styled.div`
  margin-top: 8%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  justify-content: space-between;
  grid-gap: 15px;
`;

const dash = [
  {
    icon: "/assets/icon/PieChart.svg",
    figure: "560k",
    title: "sales",
  },
  {
    icon: "/assets/icon/Person.svg",
    figure: "100k",
    title: "customers",
  },
  {
    icon: "/assets/icon/Package.svg",
    figure: "2.6k",
    title: "products",
  },
  {
    icon: "/assets/icon/DollarSign.svg",
    figure: "$28,680",
    title: "revenue",
  },
];
