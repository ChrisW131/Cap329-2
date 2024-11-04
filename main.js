// Highlight data array
// const highlights = [
//     {
//         title: "Punt Return",
//         video: "assets/Punt.mp4",
//         description: "In a thrilling moment, the punt returner fields the ball cleanly at their own 20-yard line..."
//     },
//     {
//         title: "Stretch Run",
//         video: "assets/Stretch.mp4",
//         description: "The running back takes off to the right, following the lead of their offensive line..."
//     },
//     {
//         title: "Highlight Title 3",
//         image: "assets/highlight3.jpg",
//         description: "Description of highlight 3. This can include details about the event and its significance."
//     },
//     {
//         title: "Highlight Title 4",
//         image: "assets/highlight4.jpg",
//         description: "Description of highlight 4. This can include details about the event and its significance."
//     },
//     {
//         title: "Highlight Title 5",
//         image: "assets/highlight5.jpg",
//         description: "Description of highlight 5. This can include details about the event and its significance."
//     },
//     {
//         title: "Highlight Title 6",
//         image: "assets/highlight6.jpg",
//         description: "Description of highlight 6. This can include details about the event and its significance."
//     }
// ];

// // Function to render highlights
// function renderHighlights() {
//     const container = document.getElementById('highlight-container');
//     highlights.forEach(highlight => {
//         const colDiv = document.createElement('div');
//         colDiv.className = 'col-md-4';
//         colDiv.innerHTML = `
//             <div class="highlight-card">
//                 ${highlight.video ? `<video src="${highlight.video}" controls class="img-fluid rounded"></video>` : `<img src="${highlight.image}" alt="${highlight.title}">`}
//                 <h5>${highlight.title}</h5>
//                 <p>${highlight.description}</p>
//             </div>
//         `;
//         container.appendChild(colDiv);
//     });
// }

// // Call the function to render highlights
// document.addEventListener('DOMContentLoaded', renderHighlights);


