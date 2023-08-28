function addItem(event) {
    event.preventDefault();
    let text = document.getElementById("todo-input");
    await addDoc(collection(db, "todo-items"), {
        status: "incompleted",
        text: text.value
      });
}


