import { useState } from "react";
import { useIonActionSheet } from "@ionic/react";
import styled from "styled-components";
import "../theme/polyma.css";
import { state } from "../services/store";
import { useSnapshot } from "valtio";

const Flags = () => {
  const [present] = useIonActionSheet();
  const [selected, setSelected] = useState(langs[0]);

  const { locale, labels } = useSnapshot(state);

  const i18n = (key) => {
    return labels[locale][key];
  };

  const handleClick = () => {
    present({
      header: `${i18n("selectALanguage")}`,
      cssClass: "polyma-action-select",
      buttons: [
        ...langs.map((item) => ({
          text: `${item?.flag} ${item?.country}`,
          data: {
            ...item,
          },
        })),
        {
          text: "Cancel",
          role: "cancel",
        },
      ],
      onDidDismiss: ({ detail }) => {
        const { data } = detail;
        if (!data) return;
        setSelected(data);
        state.locale = data.locale;
      },
    });
    console.log("You clicked");
  };
  return (
    <Flag onClick={handleClick}>
      <div>{selected?.flag}</div>
    </Flag>
  );
};

export default Flags;
const Flag = styled.div`
  background: #1d1f21;
  border-radius: 10px;
  padding: 8px;
`;
const langs = [
  {
    flag: "πΊπΈ",
    locale: "en",
    country: "United States",
  },
  {
    flag: "π―π΅",
    locale: "ja",
    country: "Japan",
  },
  {
    flag: "π°π·",
    locale: "ko",
    country: "South Korea",
  },
  {
    flag: "π©πͺ",
    locale: "de",
    country: "Germany",
  },
  {
    flag: "π«π·",
    locale: "fr",
    country: "France",
  },
  {
    flag: "π·πΊ",
    locale: "ru",
    country: "Russia",
  },
];
