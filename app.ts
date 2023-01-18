const endpoint = "https://randomuser.me/api/";
const results:any = document.getElementById("results");

setInterval(() => {
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        const user = data.results[0]; 
        results.innerHTML = `
            <img src="${user.picture.large}" class="user-image">
            <div class="user-info">
                <h2 class="user-name">${user.name.first} ${user.name.last}</h2>
                <p class="user-age">${user.dob.age}</p>
                <p class="user-email">${user.email}</p>
                <p class="user-location">${user.location.country}, ${user.location.city}, ${user.location.state}</p>
            </div>
        `;
    });
}, 5000);
 