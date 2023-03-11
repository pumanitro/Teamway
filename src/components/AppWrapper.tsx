import { Box } from "@mui/material";
import React, { FC } from "react";
import { AppWrapperStyles } from "./AppWrapper.styles";

type AppWrapperPropsType = {
  children: React.ReactNode;
  wrapperStyles?: React.CSSProperties;
};

export const AppWrapper: FC<AppWrapperPropsType> = ({ children, wrapperStyles }) => {
  return (
    <Box
      sx={{
        ...AppWrapperStyles,
        ...wrapperStyles,
      }}
    >
      {children}
    </Box>
  );
};
