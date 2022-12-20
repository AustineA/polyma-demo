import styled from "styled-components";

const StatsCard = ({ icon, figure, title }) => (
  <Card>
    <div className="card-inner">
      <img src={icon} />
      <span className="figure">{figure}</span>
      <p className="title">{title}</p>
    </div>
  </Card>
);

export default StatsCard;

const Card = styled.div`
  max-width: 170px;
  min-height: 165px;
  background: #1d1f21;
  border-radius: 30px;
  color: #fff;
  display: flex;
  justify-content: center;

  .card-inner {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .figure {
      font-weight: 600;
    }

    p {
      margin: 0;
      font-size: 12px;
      color: #919d9c;
    }
  }
`;
