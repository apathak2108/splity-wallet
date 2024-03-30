import React, { useState } from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import {
  Box,
  FormControl,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import "./EntryCards.css";
import Button from "@mui/joy/Button";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';

function EntryCards() {
  const [openPopup, setOpenPopup] = useState(false);

  function handleOpenPopup() {
    setOpenPopup(true);
  }
  function handleClosePopup() {
    setOpenPopup(false);
  }
  function handleOnSubmit() {
    handleClosePopup();
  }

  return (
    <>
      <div className="main__div">
        <div className="entry__cards">
          <Card variant="soft" className="entry__cards__item">
            <CardContent>
              <div>
                <Typography level="title-md">Ananya Pathak</Typography>
                <Typography>₹ 500</Typography>
                <DeleteTwoToneIcon />
                <EditNoteRoundedIcon />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="add__button__container">
          <Button className="add__button" onClick={handleOpenPopup}>
            +
          </Button>
        </div>

        <div className="modal">
          <Modal open={openPopup} onClose={handleClosePopup} back>
            <div className="modal__child">
            <Box className={"modal__content"}>
              <Typography variant="h5">Add new entry</Typography>
              <form onSubmit={handleOnSubmit}>
                <TextField label="Name"></TextField>
                <DatePicker label="Date"></DatePicker>
                <TextField label="Amount" type="number"></TextField>
                <FormControl component="fieldset">
                  <RadioGroup className="radio-btn">
                    <FormControlLabel
                      value="option1"
                      label="Borrowed"
                      control={<Radio />}
                    />
                    <FormControlLabel
                      value="option2"
                      label="Lend"
                      control={<Radio />}
                    />
                  </RadioGroup>
                </FormControl>
                <Button type="submit">
                  Add
                </Button>
              </form>
            </Box>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default EntryCards;
