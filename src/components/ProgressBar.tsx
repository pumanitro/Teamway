import { Box, Stack } from "@mui/material";
import React, { FC } from "react";

type ProgressBarPropsType = {
  currentEl: number;
  elMaxAmount: number;
};

export const ProgressBar: FC<ProgressBarPropsType> = ({ currentEl, elMaxAmount }) => {
  return (
    <Stack width="100%" direction="row" gap={2} sx={{ mb: 1 }}>
      {Array(elMaxAmount)
        .fill(0)
        .map((_, index) => (
          <Box
            key={index}
            sx={{
              width: `${(1 / elMaxAmount) * 100}%`,
              backgroundColor: index <= currentEl ? "secondary.main" : "grey.300",
              height: "6px",
              borderRadius: "10px",
            }}
          ></Box>
        ))}
    </Stack>
  );
};
