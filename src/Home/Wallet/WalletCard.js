import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import "./WalletCard.css";

export default function InteractiveCard() {
  let balance = -5520;

  console.log(balance);
  return (
    <div className="main-card">
      <Card
        orientation="horizontal"
        sx={{
          width: 350,
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
        }}
      >
        <CardContent>
          <Typography level="title-lg" id="card-description">
            Balance
          </Typography>
          <Typography
            level="body-sm"
            aria-describedby="card-description"
            fontSize={35}
            mb={1}
          >
            ₹{" "}
            <Typography
              component={"span"}
              sx={{
                color: balance < 0 ? "red" : "green",
              }}
            >
              {balance}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
