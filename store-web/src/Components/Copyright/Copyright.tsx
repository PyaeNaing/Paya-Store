import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        Pyae Naing
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
