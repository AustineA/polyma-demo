import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import styled from "styled-components";
import StatsCard from "../components/StatsCard";

const Home: React.FC = () => {
  return (
    <HomePage>
      <IonHeader className="ion-no-border">
        <IonToolbar></IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <StatsCard />
      </IonContent>
    </HomePage>
  );
};

export default Home;

const HomePage = styled(IonPage)`
  background: var(--ion-color-bg);

  ion-toolbar {
    --background: transparent;
    padding-left: 18px;
    margin-top: 10px;
  }

  ion-content {
    --background: transparent;
    --background-color: transparent;
    background: transparent !important;
  }
`;
