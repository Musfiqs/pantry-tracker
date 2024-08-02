document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("inventory-form");
    const itemInput = document.getElementById("item");
    const inventoryList = document.getElementById("inventory-list");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const itemText = itemInput.value.trim(); // Get the input value and trim any whitespace
        if (itemText !== "") {
            // Create a new inventory item element
            const itemElement = document.createElement("div");
            itemElement.className = "inventory-item d-flex align-items-center mb-2";

            // Create the item text node
            const textNode = document.createElement("span");
            textNode.textContent = itemText;
            textNode.className = "me-auto"; // Bootstrap class for right margin auto

            // Create the counter element
            const counterElement = document.createElement("span");
            counterElement.textContent = "0";
            counterElement.className = "mx-2"; // Bootstrap class for horizontal margins

            // Create the increment button
            const incrementButton = document.createElement("button");
            incrementButton.textContent = "+";
            incrementButton.className = "btn btn-success btn-sm ms-2"; // Bootstrap classes for small button and left margin
            incrementButton.addEventListener("click", function() {
                counterElement.textContent = parseInt(counterElement.textContent) + 1;
            });

            // Create the decrement button
            const decrementButton = document.createElement("button");
            decrementButton.textContent = "-";
            decrementButton.className = "btn btn-danger btn-sm ms-2"; // Bootstrap classes for small button and left margin
            decrementButton.addEventListener("click", function() {
                counterElement.textContent = Math.max(0, parseInt(counterElement.textContent) - 1); // Ensure the count doesn't go below 0
            });

            // Append all elements to the item element
            itemElement.appendChild(textNode);
            itemElement.appendChild(decrementButton);
            itemElement.appendChild(counterElement);
            itemElement.appendChild(incrementButton);

            // Append the item element to the inventory list
            inventoryList.appendChild(itemElement);

            // Clear the input field
            itemInput.value = "";
        }
    });
});