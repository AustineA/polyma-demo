import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonToolbar,
  IonButtons,
  IonButton,
} from "@ionic/react";
import styled from "styled-components";
import Stats from "../components/Stats";
import Chart from "../components/Chart";
import Flags from "../components/Flags";

const Home = () => {
  return (
    <HomePage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton>
              <Flags />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" color="bg">
        <Chart />
        <IonLabel>Sales Revenue</IonLabel>
        <Stats />
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

  .stats {
  }
`;
