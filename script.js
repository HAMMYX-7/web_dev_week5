// Change text dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    const text = document.getElementById('dynamic-text');
    text.textContent = '🎉 You changed the text successfully!';
    text.style.color = '#e91e63';
    text.style.fontSize = '20px';
  });
  
  // Style the box
  document.getElementById('style-btn').addEventListener('click', () => {
    const box = document.getElementById('box');
    box.style.backgroundColor = '#4caf50';
    box.style.transform = 'rotate(5deg) scale(1.05)';
    box.style.fontSize = '20px';
    box.textContent = '🎉 Styled!';
  });
  
  // Add item to list
  document.getElementById('add-item-btn').addEventListener('click', () => {
    const ul = document.getElementById('item-list');
    const li = document.createElement('li');
    const emojis = ['🍟', '🌭', '🍿', '🍩', '🍇'];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    li.textContent = `${emoji} New Item ${ul.children.length + 1}`;
    ul.appendChild(li);
  });
  
  // Remove last item
  document.getElementById('remove-item-btn').addEventListener('click', () => {
    const ul = document.getElementById('item-list');
    if (ul.lastElementChild) {
      ul.removeChild(ul.lastElementChild);
    } else {
      alert("❗ No more items to remove!");
    }
  });
  