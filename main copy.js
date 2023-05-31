// "use strict";

// const openModal = () =>
//   document.getElementById("modal").classList.add("active");

// const closeModal = () => {
//   clearFields();
//   document.getElementById("modal").classList.remove("active");
// };

// const createRow = (client, index) => {
//   const newRow = document.createElement("tr");
//   newRow.innerHTML = `
//         <td>${client.nome}</td>
//         <td>${client.email}</td>
//         <td>${client.celular}</td>
//         <td>${client.cidade}</td>
//         <td>
//           <button type="button" class="button green" id="edit-${client.id}"> editar </button>
//           <button type="button" class="button red" id="delete-${index}"> excluir </button>
//         </td>
//     `;

//   document.querySelector("#tableClient>tbody").appendChild(newRow);
// };

// const clearFields = () => {
//   const fields = document.querySelectorAll(".modal-field");
//   fields.forEach((field) => (field.value = ""));
// };

// class tableClient {
//   constructor() {
//     this.keyLocal = "db_client";
//     const table = JSON.parse(localStorage.getItem(this.keyLocal));
//     this.table = table ?? [];
//   }

//   add(item) {
//     this.table.push(item);
//     this.save();
//   }
//   remove(id) {
//     const newTable = this.table.filter((item) => item.id !== id);
//     this.table = newTable;
//     this.save();
//   }
//   edit(item) {
//     const newTable = this.table.filter((itemFromTable) => {
//       if (itemFromTable.id === item.id) {
//         itemFromTable = item;
//       }
//       return itemFromTable;
//     });
//     this.table = newTable;
//     this.save();
//   }

//   delete(item) {
//     this.table.pop(item);
//     this.save();
//   }

//   save(item) {
//     localStorage.setItem(this.keyLocal, JSON.stringify(this.table));
//     this.reloadTable();
//   }

//   capturaCliques = () => {
//     document.addEventListener("click", (e) => {
//       const el = e.target;
//       if (el.classList.contains("salvar")) {
//         this.save();
//       } else if (el.classList.contains("cancelar")) {
//         console.log("deletei");
//       }
//     });
//   };

//   reloadTable() {
//     this.table.forEach((item) => createRow(item));
//   }

//   get result() {
//     console.log(this.table);
//   }
// }

// const table = new tableClient();

// // table.add({
// //   id: Math.floor(Math.random() * 1000 * 1000),
// //   celular: "359989293283",
// //   cidade: "maraba",
// //   email: "melissa@gmail.com",
// //   nome: "melissa",
// // });
// table.reloadTable();
// table.capturaCliques();
// document
//   .getElementById("cadastrarCliente")
//   .addEventListener("click", openModal);

// document.getElementById("modalClose").addEventListener("click", closeModal);

// construção do mesmo exercicio com classes ainda em contrução
