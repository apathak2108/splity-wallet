export function handleEditEntry(entries, setEditIndex, setFormData, setOpenPopup, index) {
    setEditIndex(index);
    const entryToEdit = entries[index];
    setFormData({
      name: entryToEdit.name,
      date: entryToEdit.date,
      amount: entryToEdit.amount,
      type: entryToEdit.type,
    });
    setOpenPopup(false);
    setFormData({
        name: "",
        amount: null,
        date: null,
        type: "option1",
      });
}