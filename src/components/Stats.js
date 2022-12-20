import styled from "styled-components";
import StatsCard from "./StatsCard";

const Stats = () => {
  return (
    <StatsContainer>
      {dash.map(({ icon, figure, title }, i) => (
        <StatsCard icon={icon} figure={figure} title={title} key={i} />
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
    title: "Sales",
  },
  {
    icon: "/assets/icon/Person.svg",
    figure: "100k",
    title: "Customers",
  },
  {
    icon: "/assets/icon/Package.svg",
    figure: "2.6k",
    title: "Products",
  },
  {
    icon: "/assets/icon/DollarSign.svg",
    figure: "$28,680",
    title: "Revenue",
  },
];
