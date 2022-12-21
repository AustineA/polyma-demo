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
import { state } from "../services/store";
import { useSnapshot } from "valtio";

const Home = () => {
  const { locale, labels } = useSnapshot(state);

  const i18n = (key) => {
    return labels[locale][key];
  };

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
        <IonLabel>{i18n("salesRevenue")}</IonLabel>
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
