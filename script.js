// script.js
document.getElementById('add-btn').addEventListener('click', function() {
    // Hämta texten från inputfältet
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();
  
    // Kontrollera om fältet inte är tomt
    if (todoText !== '') {
      // Skapa ett nytt li-element
      const li = document.createElement('li');
      li.textContent = todoText;
  
      // Lägg till li-elementet i ul-elementet
      const ul = document.getElementById('todo-list');
      ul.appendChild(li);
  
      // Rensa inputfältet
      input.value = '';
    }
  });
  