import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";

/* Con este package se pueden crear componentes, los cuales se pueden añadir muchos estilos y ser 
importados, esto sin necesidad de utilizar css */
const StyledHero = styled.header`
  min-height: 60vh;
  /* Aqui se obtiene la imagen que se manda desde SingleRoom.js como parametro */
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
