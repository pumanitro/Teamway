import { Box } from "@mui/material";
import React, { FC } from "react";
import { AppWrapperStyles } from "./AppWrapper.styles";

type AppWrapperPropsType = {
  children: React.ReactNode;
};

export const AppWrapper: FC<AppWrapperPropsType> = ({ children }) => {
  return <Box sx={AppWrapperStyles}>{children}</Box>;
};
