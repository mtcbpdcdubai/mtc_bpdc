const gallery = document.getElementById('gallery')
const popup = document.getElementById('popup')

const imageIndexes = [1,2,3,4,5,6]
const events = ["ThinkAI'23","CINS-Day1", "CINS-Day2", "CINS-Day3", 'BTF-AKSI-2023','Sign-Quest', 'Typing-Contest','Icebreakers']
const selectedIndex = null;


events.forEach(i => {
    const block = document.createElement('div');
    block.id = i;
    const header = document.createElement('h1');
    header.innerText = i;
    block.appendChild(header);
    imageIndexes.forEach(j => {  
        const image = document.createElement('img');
        image.src= `${i}/IMG-${j}.jpg`;
        image.alt = `image_${j}`;
        image.classList.add('galleryImage');
        
        block.appendChild(image);
    })
    gallery.appendChild(block);
})
