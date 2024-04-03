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
  addEntry,
  editEntry,
  deleteEntry,
  handleModalView,
  submitForm,
} from "../../redux/action/entryAction";

function EntryCards({ handleTotalAmount }) {
  const { openPopup, formData, entries, toastOpen, toastMesage, editIndex } = useSelector((state) => state.entry);
  const dispatch = useDispatch();
  // const [entries, setEntries] = useState([]);
  // const [toastOpen, setToastOpen] = useState(false);
  // const [toastMessage, setToastMessage] = useState("");
  // const [editIndex, setEditIndex] = useState(null);

  handleTotalAmount(entries);
  
  console.log(openPopup, "openPopup");
  function handleOpenPopup() {
    dispatch(handleModalView());
    // setOpenPopup(true);
  }


  function handleClosePopup() {
    dispatch(handleModalView());
  }

  function handleRadioChange(e) {
    dispatch(addEntry("type", e.target.value));
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    dispatch(addEntry(name, value));
    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   [name]: value,
    // }));
  }

  function handleDateChange(date) {
    dispatch(addEntry("date", date));
  }

  function handleOnSubmit(e) {
    // dispatch(addEntry(formData))
    dispatch(submitForm());
    // const newEntry = { ...formData };

    // if (editIndex !== null) {
    //   const updatedEntries = [...entries];
    //   updatedEntries[editIndex] = newEntry;
    //   setEntries(updatedEntries);
    //   setToastMessage("Entry updated");
    // } else {
    //   setEntries([...entries, newEntry]);
    //   setToastMessage("Entry added");
    // }
    // setFormData({
    //   name: "",
    //   amount: null,
    //   date: null,
    //   type: "option1",
    // });
    // setEditIndex(null);
    // setToastOpen(true);
    handleClosePopup();
  }

  function handleDeleteEntry(index) {
    // const newEntries = [...entries];
    // newEntries.splice(index, 1);
    dispatch(deleteEntry(index));
    // setEntries(newEntries);
    // setToastMessage("Entry deleted");
    // setToastOpen(true);
  }

  function handleEditEntry(index) {
    // setEditIndex(index);
    const entryToEdit = entries[index];
    // setFormData({
    //   name: entryToEdit.name,
    //   date: entryToEdit.date,
    //   amount: entryToEdit.amount,
    //   type: entryToEdit.type,
    // });
    // setOpenPopup(true);
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
