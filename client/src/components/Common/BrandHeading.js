import React from "react";
import { Typography } from "@material-ui/core";

import MarazziLogo from "../../assets/img/Marazzi.jpg";
import KAILogo from "../../assets/img/KAI.jpg";
import HGLogo from "../../assets/img/HG.jpg";
import DuraLogo from "../../assets/img/DURA.jpg";
import AkgunLogo from "../../assets/img/Akgun.jpg";
import ArgentaLogo from "../../assets/img/Argenta.jpg";
import GaogeLogo from "../../assets/img/Gaoge.jpg";
import BaldocerLogo from "../../assets/img/Baldocer.jpg";
import Hispania from "../../assets/img/Hispania.jpg";
import QUA from "../../assets/img/QUA.jpg";
import Roca from "../../assets/img/Roca.jpg";
import Prismacer from "../../assets/img/Prismacer.jpg";
import ITA from "../../assets/img/ITA.jpg";
import Serra from "../../assets/img/Serra.jpg";
import BOBO from "../../assets/img/BOBO.jpg";
import Usak from "../../assets/img/Usak.jpg";
import MarcoPolo from "../../assets/img/Marco-Polo.jpg";
import Bien from "../../assets/img/Bien.jpg";
import Sintesi from "../../assets/img/Sintesi.jpg";
import Vidima from "../../assets/img/Vidima.jpg";
import Ideal from "../../assets/img/Ideal.jpg";
import Rovese from "../../assets/img/Rovese.jpg";
import Ece from "../../assets/img/Ece.jpg";
import VB from "../../assets/img/VB.jpg";
import Grohe from "../../assets/img/Grohe.jpg";
import Huppe from "../../assets/img/Huppe.jpg";
import Ariston from "../../assets/img/Ariston.jpg";
import Zorka from "../../assets/img/Zorka.jpg";

function BrandHeading(props) {
  if (props.title === "Marazzi") {
    return <img src={MarazziLogo} height="30" />;
  }
  if (props.title === "KAI") {
    return <img src={KAILogo} height="30" />;
  }
  if (props.title === "HansGrohe") {
    return <img src={HGLogo} height="30" />;
  }
  if (props.title === "Argenta") {
    return <img src={ArgentaLogo} height="30" />;
  }
  if (props.title === "DURA") {
    return <img src={DuraLogo} height="30" />;
  }
  if (props.title === "Akgun") {
    return <img src={AkgunLogo} height="30" />;
  }
  if (props.title === "GAOGE") {
    return <img src={GaogeLogo} height="30" />;
  }
  if (props.title === "Baldocer") {
    return <img src={BaldocerLogo} height="30" />;
  }
  if (props.title === "Hispania") {
    return <img src={Hispania} height="30" />;
  }
  if (props.title === "QUA") {
    return <img src={QUA} height="30" />;
  }
  if (props.title === "Roca") {
    return <img src={Roca} height="30" />;
  }
  if (props.title === "Prismacer") {
    return <img src={Prismacer} height="30" />;
  }
  if (props.title === "Serra") {
    return <img src={Serra} height="30" />;
  }
  if (props.title === "ITA") {
    return <img src={ITA} height="30" />;
  }
  if (props.title === "BOBO") {
    return <img src={BOBO} height="30" />;
  }
  if (props.title === "Usak") {
    return <img src={Usak} height="30" />;
  }
  if (props.title === "Marco Polo") {
    return <img src={MarcoPolo} height="30" />;
  }
  if (props.title === "Sintesi") {
    return <img src={Sintesi} height="30" />;
  }
  if (props.title === "Bien") {
    return <img src={Bien} height="30" />;
  }
  if (props.title === "Vidima") {
    return <img src={Vidima} height="30" />;
  }
  if (props.title === "Ideal") {
    return <img src={Ideal} height="30" />;
  }
  if (props.title === "Rovese") {
    return <img src={Rovese} height="30" />;
  }
  if (props.title === "Ece") {
    return <img src={Ece} height="30" />;
  }
  if (props.title === "VB") {
    return <img src={VB} height="30" />;
  }
  if (props.title === "IS baterije") {
    return <img src={Ideal} height="30" />;
  }
  if (props.title === "Grohe") {
    return <img src={Grohe} height="30" />;
  }
  if (props.title === "Huppe") {
    return <img src={Huppe} height="30" />;
  }
  if (props.title === "Zorka") {
    return <img src={Zorka} height="30" />;
  }
  if (props.title === "Ariston") {
    return <img src={Ariston} height="30" />;
  }
  return <Typography variant="h5">{props.title}</Typography>;
}

export default BrandHeading;
