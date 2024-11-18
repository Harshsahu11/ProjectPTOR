document.getElementById("itemForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const itemName = document.getElementById("itemName").value;
    const itemImage = document.getElementById("itemImage").files[0];
    const bidAmount = document.getElementById("bidAmount").value;
    const distance = document.getElementById("distance").value;
    const deliveryType = document.getElementById("deliveryType").value;
    const location = document.getElementById("location").value;

    const reader = new FileReader();
    reader.onload = function(e) {
        const itemList = document.getElementById("itemList");
        
        const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `
            <img src="${e.target.result}" alt="${itemName}" class="item-image">
            <h3>${itemName}</h3>
            <p><strong>Bid Amount:</strong> ₹${bidAmount}</p>
            <p><strong>Distance:</strong> ${distance} km</p>
            <p><strong>Delivery:</strong> ${deliveryType}</p>
            <p><strong>Location:</strong> ${location}</p>
        `;

        itemList.appendChild(card);

     
        card.style.opacity = 0;
        setTimeout(() => {
            card.style.transition = "opacity 0.5s ease";
            card.style.opacity = 1;
        }, 50);
    };

    if (itemImage) {
        reader.readAsDataURL(itemImage);
    }

    document.getElementById("itemForm").reset();
});
