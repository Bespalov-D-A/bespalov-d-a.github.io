import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { theme } from "../../../7-Shared/assets/mui/WithTheme";
import React, { FC } from "react";

//импортируем кастомизированную тему, оборачиваем ей приложение
//Оборачиваем приложение StyledEngine что бы css был выше mui cssInJs
export const withMuiStyled = (YourReactComponent: React.FC) => {
return <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}><YourReactComponent/></ThemeProvider>
    </StyledEngineProvider>
}

  
