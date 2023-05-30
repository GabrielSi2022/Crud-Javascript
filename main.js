"use strict";

const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () => {
  clearFields();
  document.getElementById("modal").classList.remove("active");
};

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage = (db_client) =>
  localStorage.setItem("db_client", JSON.stringify(db_client));

//Crud - create - read - update - delete

//// Create
const createClient = (client) => {
  const db_client = getLocalStorage();
  db_client.push(client);
  setLocalStorage(db_client);
};

//// Read
const readClient = () => getLocalStorage();

//// Update

const updateClient = (index, client) => {
  const db_client = readClient();
  db_client[index] = client;
  setLocalStorage(db_client);
};

//// Delete

const deleteClient = (index) => {
  const db_client = readClient();
  db_client.splice(index, 1);
  setLocalStorage(db_client);
};

// Validação dos campos

const isValidFields = () => {
  return document.getElementById("form").reportValidity();
};

//Limpar os campos

const clearFields = () => {
  const fields = document.querySelectorAll(".modal-field");
  fields.forEach((field) => (field.value = ""));
};

//Limpar Linhas

const clearTable = () => {
  document.querySelector("#tableClient>tbody").innerHTML = "";
};

//Interação com Layout

////botao salvar
const saveClient = () => {
  if (isValidFields()) {
    const client = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      celular: document.getElementById("celular").value,
      cidade: document.getElementById("cidade").value,
    };
    const index = document.getElementById("nome").dataset.index;
    if (index == "new") {
      createClient(client);
      updateTable();
      closeModal();
    } else {
      updateClient(index, client);
      updateTable();
      closeModal();
      //   location.reload();
    }
  }
};

////botao cancelar
const cancelClient = () => {
  clearFields();
  closeModal();
};

////botao editar e deletar

const fillFields = (client) => {
  document.getElementById("nome").value = client.nome;
  document.getElementById("email").value = client.email;
  document.getElementById("celular").value = client.celular;
  document.getElementById("cidade").value = client.cidade;
  document.getElementById("nome").dataset.index = client.index;
};

const editClient = (index) => {
  const client = readClient()[index];
  client.index = index;
  fillFields(client);
  openModal();
};

const editDelete = (event) => {
  if (event.target.type == "button") {
    const [action, index] = event.target.id.split("-");

    if (action == "edit") {
      editClient(index);
    } else {
      const client = readClient()[index];
      const response = confirm(
        `Deseja realmente excluir o cliente ${client.nome}`
      );
      if (response) {
        deleteClient(index);
        updateTable();
      }
    }
  }
};

//Dados da Tabela

const createRow = (client, index) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.celular}</td>
        <td>${client.cidade}</td>
        <td>
          <button type="button" class="button green" id="edit-${index}"> editar </button>
          <button type="button" class="button red" id="delete-${index}"> excluir </button>
        </td>
    `;

  document.querySelector("#tableClient>tbody").appendChild(newRow);
};

const updateTable = () => {
  const db_client = readClient();
  clearTable();
  db_client.forEach(createRow);
  console.log(createRow);
};

updateTable();
// Eventos

document
  .getElementById("cadastrarCliente")
  .addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("salvar").addEventListener("click", saveClient);

document.getElementById("cancelar").addEventListener("click", cancelClient);

document
  .querySelector("#tableClient>tbody")
  .addEventListener("click", editDelete);
