import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BiUser } from "react-icons/bi";
import styles from "./FlaggedComment.module.scss";
import { AiFillFlag } from "react-icons/ai";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ width: 400, height: 220, marginBottom: 5 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 18, fontWeight: 900 }}
          color="text.secondary"
          gutterBottom
        >
          User comment has been flagged due to....
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <BiUser style={{ height: "30px", width: "30px" }} />
          <br />
          <BiUser style={{ height: "30px", width: "30px" }} />
        </Typography>
      </CardContent>
      <AiFillFlag style={{ height: " 40px", width: "40px", marginLeft: 10 }} />
      <Button
        className="view-btn"
        sx={{
          float: "right",
          color: " white",
          height: 30,
          width: 40,
          backgroundColor: "#FF3F00",
          marginRight: 2,
        }}
      >
        View
      </Button>
    </Card>
  );
}
