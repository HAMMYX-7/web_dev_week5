# web_dev_week5
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>DOM Manipulation Example</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1 id="main-heading">Welcome to My Page</h1>
  </header>

  <main>
    <section>
      <p id="dynamic-text">This text will be changed dynamically.</p>
      <button id="change-text-btn">Change Text</button>
    </section>

    <section>
      <div id="box">I will change style</div>
      <button id="style-btn">Change Style</button>
    </section>

    <section>
      <ul id="item-list">
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <button id="add-item-btn">Add Item</button>
      <button id="remove-item-btn">Remove Item</button>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 My Site</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>

#box {
  width: 200px;
  height: 100px;
  background-color: lightblue;
  margin-top: 10px;
  padding: 10px;
  text-align: center;
}

// Change text content
document.getElementById("change-text-btn").addEventListener("click", () => {
  document.getElementById("dynamic-text").textContent = "Text changed via JavaScript!";
});

// Modify CSS styles
document.getElementById("style-btn").addEventListener("click", () => {
  const box = document.getElementById("box");
  box.style.backgroundColor = "lightgreen";
  box.style.border = "2px solid black";
  box.style.color = "darkblue";
});

// Add and remove list items
document.getElementById("add-item-btn").addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${document.querySelectorAll("#item-list li").length + 1}`;
  document.getElementById("item-list").appendChild(newItem);
});

document.getElementById("remove-item-btn").addEventListener("click", () => {
  const list = document.getElementById("item-list");
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
});
