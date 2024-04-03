import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import "./WalletCard.css";

export default function WalletCard({totalAmount}) {
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
        <CardContent sx={{textAlign: "center"}}>
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
                color: totalAmount < 0 ? "red" : "green",
              }}
            >
              {totalAmount}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
      {/* <EntryCards  totalAmount={totalAmount} updateTotalAmount={updateTotalAmount} /> */}
    </div>
  );
}
