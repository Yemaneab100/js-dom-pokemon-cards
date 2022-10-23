console.log(data)

const cardLists = document.querySelector('.cards');


  data.forEach(card => {
    const li = document.createElement('li');
    li.classList.add('card');
    const h2 = document.createElement('h2');
    h2.classList.add('card--title');
    h2.innerText = card.name;
    const img = document.createElement('img')
    img.setAttribute('width', 256);
    img.classList.add('card--img');
    const sorImage = card.sprites.other['official-artwork'].front_default;
    img.setAttribute('src', sorImage);
    
    li.appendChild(h2);
    li.appendChild(img);
    cardLists.appendChild(li);
  
    const ul = document.createElement('ul');
    ul.classList.add('card--text');
    li.appendChild(ul);
    card.stats.forEach(stat => {
      const listText = document.createElement('li');
      listText.innerText = stat.base_stat + stat.stat.name;
      ul.appendChild(listText);
      
    });
  
  });



