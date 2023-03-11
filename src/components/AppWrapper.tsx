import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React, { FC } from "react";
import { AppWrapperStyles } from "./AppWrapper.styles";
import Person4Icon from "@mui/icons-material/Person4";

type AppWrapperPropsType = {
  children: React.ReactNode;
  wrapperStyles?: React.CSSProperties;
};

export const AppWrapper: FC<AppWrapperPropsType> = ({ children, wrapperStyles }) => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Person4Icon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Personality test
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          ...AppWrapperStyles,
          ...wrapperStyles,
        }}
      >
        {children}
      </Box>
      <Box>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          All the graphics were created by AI.
        </Typography>
      </Box>
    </>
  );
};
