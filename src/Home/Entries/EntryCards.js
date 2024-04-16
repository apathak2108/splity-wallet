import React, { useEffect } from "react";
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
  isLoadEntries,
} from "../../redux/action/entryAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EntryCards({ handleTotalAmount }) {
  const { openPopup, formData, entries, editIndex } = useSelector(
    (state) => state.entry
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("entries"));
    handleTotalAmount(storedEntries);

    if (storedEntries) {
      dispatch(isLoadEntries(storedEntries));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
    handleTotalAmount(entries);
  }, [entries]);

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
    toast.dark("Entry added !");
  }

  function handleDeleteEntry(index) {
    dispatch(deleteEntry(index));
    toast.dark("Entry deleted !");
  }

  function handleEditEntry(index) {
    dispatch(handleEntryToEdit(index));
  }

  return (
    <>
      <div className="main__div">
        {entries?.map((entry, index) => {
          const entryDate = new Date(entry.date);
          const today = new Date();
          const differenceInDays = (today - entryDate) / 86400000;
          let interestRate = 0.005;
          let interestDays = Math.floor(differenceInDays / 5);

          if (differenceInDays <= 5) {
            interestDays = 1;
          }

          return (
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
                    <Typography fontWeight={"bold"}>
                      ₹ {entry.amount}
                    </Typography>
                    <Typography>{entry.date}</Typography>
                    <Typography>
                      {entry.type === "option1"
                        ? differenceInDays > 0
                          ? `₹ -${(
                              entry.amount *
                              interestRate *
                              interestDays
                            ).toFixed(2)} (-${(
                              interestRate *
                              100 *
                              interestDays
                            ).toFixed(2)}%)`
                          : "No interest"
                        : differenceInDays > 0
                        ? `₹ +${(
                            entry.amount *
                            interestRate *
                            interestDays
                          ).toFixed(2)} (+${(
                            interestRate *
                            100 *
                            interestDays
                          ).toFixed(2)}%)`
                        : "No interest"}
                    </Typography>
                  </div>
                  <div className="entry__cards__2">
                    <DeleteTwoToneIcon
                      onClick={() => handleDeleteEntry(index)}
                    />
                    <EditNoteRoundedIcon
                      onClick={() => handleEditEntry(index)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
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
                    label="Date of Transaction"
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
        <ToastContainer
          closeButton={false}
          className="toast__container"
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
        />
      </div>
    </>
  );
}

export default EntryCards;
