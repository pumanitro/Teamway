import { AppBar, Box, Card, Container, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { FC } from "react";
import { AppWrapperStyles } from "./AppWrapper.styles";
import Person4Icon from "@mui/icons-material/Person4";

type AppWrapperPropsType = {
  children: React.ReactNode;
  wrapperStyles?: React.CSSProperties;
  cardStyles?: React.CSSProperties;
};

export const AppWrapper: FC<AppWrapperPropsType> = ({ children, wrapperStyles, cardStyles }) => {
  const theme = useTheme();
  const mdMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Person4Icon sx={{ mr: 1, display: "flex" }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: "flex",
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
        <Card sx={{ p: 2, width: mdMatch ? "85%" : "70%", m: 4, minHeight: "60vh", ...cardStyles }}>{children}</Card>
      </Box>
      <Box>
        <Typography variant="body2" align="center" sx={{ my: 2 }}>
          All the graphics were created by AI.
        </Typography>
      </Box>
    </>
  );
};
