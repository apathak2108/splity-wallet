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
  Snackbar,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import "./EntryCards.css";
import Button from "@mui/joy/Button";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import { useDispatch, useSelector } from "react-redux";
import {
  inputChange,
  handleEntryToEdit,
  deleteEntry,
  handleModalView,
  submitForm,
  resetFormData,
} from "../../redux/action/entryAction";

function EntryCards({ handleTotalAmount }) {
  const { openPopup, formData, entries, toastOpen, toastMesage, editIndex } =
    useSelector((state) => state.entry);
  const dispatch = useDispatch();
  handleTotalAmount(entries);

  function handleOpenPopup() {
    dispatch(handleModalView());
  }

  function handleClosePopup() {
    dispatch(handleModalView());
  }

  function handleRadioChange(e) {
    dispatch(inputChange("type", e.target.value));
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    dispatch(inputChange(name, value));
  }

  function handleDateChange(date) {
    dispatch(inputChange("date", date));
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(submitForm());
  }

  function handleDeleteEntry(index) {
    dispatch(deleteEntry(index));
  }

  function handleEditEntry(index) {
    dispatch(handleEntryToEdit(index));
  }

  return (
    <>
      <div className="main__div">
        {entries.map((entry, index) => (
          <Card
            variant="soft"
            className={`entry__cards__item ${
              entry.type === "option1" ? "red" : "green"
            }`}
            key={index}
          >
            <CardContent>
              <div className="entry__cards">
                <div className="entry__cards__1">
                  <Typography level="title-md">{entry.name}</Typography>
                  <Typography>₹ {entry.amount}</Typography>
                  <Typography>{entry.date}</Typography>
                </div>
                <div className="entry__cards__2">
                  <DeleteTwoToneIcon onClick={() => handleDeleteEntry(index)} />

                  <EditNoteRoundedIcon onClick={() => handleEditEntry(index)} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        <div className="add__button__container">
          <Button className="add__button" onClick={handleOpenPopup}>
            +
          </Button>
        </div>

        <div className="modal">
          <Modal open={openPopup} onClose={handleClosePopup}>
            <div className="modal__child">
              <Box className={"modal__content"}>
                <h3>{editIndex !== null ? "Edit entry" : "Add new entry"}</h3>
                <form onSubmit={handleOnSubmit}>
                  <TextField
                    label="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    name="name"
                    required
                  />
                  <TextField
                    label="Amount"
                    type="number"
                    value={formData.amount}
                    onChange={handleInputChange}
                    name="amount"
                    margin="dense"
                    required
                  />
                  <TextField
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleDateChange(e.target.value)}
                    name="date"
                    fullWidth
                    margin="dense"
                    required
                  />
                  <FormControl component="fieldset">
                    <RadioGroup
                      className="radio-btn"
                      value={formData.type}
                      onChange={handleRadioChange}
                    >
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
                    {editIndex !== null ? "Update" : "Add"}
                  </Button>
                </form>
              </Box>
            </div>
          </Modal>
        </div>
      </div>
      {/* <Snackbar
        open={toastOpen}
        autoHideDuration={1500}
        onClose={() => setToastOpen(false)}
        message={toastMessage}
      /> */}
    </>
  );
}

export default EntryCards;
