const response = await fetch('http://localhost:4040/test');
const data = await response.json();

const elementValue = `
<div class="sub-container">
  <h2 class="title">${data.title}</h2>
  <p class="content">Content of the data:${data.content}</p>
  <p class="id">ID:${data.id}</p>
</div>
`;
const parentElement = document.querySelector(".main-container");
parentElement.innerHTML = elementValue;