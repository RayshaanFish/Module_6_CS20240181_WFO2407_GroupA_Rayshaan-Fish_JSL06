// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: [
        { name: "Garlic Bread", price: 10.00 },
        { name: "Bruschetta", price: 12.00 }
    ],
    MainCourses: [
        { name: "Margherita Pizza", price: 45.00 },
        { name: "Spaghetti Carbonara", price: 60.00 }
    ],
    Desserts: [
        { name: "Tiramisu", price: 40.00 },
        { name: "Cheesecake", price: 35.00 }
    ]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuDisplay = document.getElementById('menu');

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        // Create an element to represent the category
        const categoryElement = document.createElement('h3');
        categoryElement.textContent = category;

        // Create an element to represent a list of items
        const itemList = document.createElement('ul');

        // Loop through the items in the category and create list items
        menu[category].forEach(item =>{
            const itemElement = document.createElement('li');
            itemElement.textContent = `${item.name} - R${item.price.toFixed(2)}`;

            // Attach a click event listener to the list item to add it to the order
            itemElement.addEventListener('click', () => addToOrder(item));

            // Append the list item to the list of items
            itemList.appendChild(itemElement);

        });

        // Append the category and item list to the menu container
        menuDisplay.appendChild(categoryElement);
        menuDisplay.appendChild(itemList);
    }
}

// Create order state
let orderItems = [];
let orderTotal = 0;


// Callback function for adding an item to the order
function addToOrder(item) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    // Create a list item for the order
    const orderItemElement = document.createElement('li');
    orderItemElement.textContent = `${item.name} - R${item.price.toFixed(2)}`;

    // Append the list item to the order items list
    orderItemsList.appendChild(orderItemElement);

    // Calculate and update the total price
    orderItems.push(item);
    orderTotal += item.price;

    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = `R${orderTotal.toFixed(2)}`;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
