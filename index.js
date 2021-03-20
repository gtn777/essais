
const root = document.getElementById('root');

for (let i = 0; i < 5; i++) {
   let newText = document.createElement('p');
   newText.textContent = "Bienvenue sur ce super site";
   root.appendChild(newText);   
}

