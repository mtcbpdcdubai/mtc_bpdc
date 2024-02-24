/*const gallery = document.getElementById('gallery')
const popup = document.getElementById('popup')

const imageIndexes = [1,2,3,4,5,6]
const events = ["ThinkAI'23","CINS-Day1", "CINS-Day2", "CINS-Day3", 'BTF-AKSI-2023','Sign-Quest', 'Typing-Contest','Icebreakers']
const selectedIndex = null;


events.forEach(i => {
    const block = document.createElement('div');
    block.id = i;
    const header = document.createElement('h1');
    const division = document.createElement('div');
    
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
*/

const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');

const imageIndexes = [1, 2, 3, 4, 5, 6];
const events = ["ThinkAI'23", "CINS-Day1", "CINS-Day2", "CINS-Day3", 'BTF-AKSI-2023', 'Sign-Quest', 'Typing-Contest', 'Icebreakers'];
const selectedIndex = null;

events.forEach((eventName) => {
    const eventBlock = document.createElement('div');
    eventBlock.id = eventName;
    eventBlock.classList.add('event-container'); // Add a class for styling
    eventBlock.style.overflow = 'hidden'; // Hide vertical scrollbar

    const eventHeader = document.createElement('h1');
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container'); // Add a class for styling
    imageContainer.style.display = 'flex'; // Make the container a flex container

    eventHeader.innerText = eventName;

    imageIndexes.forEach((index) => {
        const image = document.createElement('img');
        image.src = `${eventName}/IMG-${index}.jpg`;
        image.alt = `image_${index}`;
        image.classList.add('galleryImage');
        imageContainer.appendChild(image);
    });

    eventBlock.appendChild(eventHeader);
    eventBlock.appendChild(imageContainer);

    gallery.appendChild(eventBlock);
});