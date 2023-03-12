import React from "react";
import { AppWrapper } from "../components/AppWrapper";
import Page404IMG from "../assets/404_page.png";
import { Stack, useMediaQuery, useTheme } from "@mui/material";

export const Page404 = () => {
  const theme = useTheme();
  const mdMatch = useMediaQuery(theme.breakpoints.down("md"));

  const size = mdMatch ? "90vw" : "60vh";

  return (
    <AppWrapper cardStyles={{ height: size, width: size, minHeight: size }}>
      <Stack justifyContent="center" alignItems="center">
        <img style={{ height: size }} src={Page404IMG} alt="page 404" />
      </Stack>
    </AppWrapper>
  );
};
