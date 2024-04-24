// Fetch the main menu data from JSON
fetch('main_menu.json')
    .then(response => response.json())
    .then(data => {
        const menu = document.getElementById('menu');
        data.forEach(item => {
            const menuItem = document.createElement('li');
            menuItem.textContent = item.name;
            menuItem.onclick = () => toggleSubMenu(item.submenu);
            menu.appendChild(menuItem);
        });
    });

// Function to toggle submenu
function toggleSubMenu(submenuDataUrl) {
    const submenuContainer = document.getElementById('submenu-container');

    // Fetch submenu data from JSON
    fetch(submenuDataUrl)
        .then(response => response.json())
        .then(submenuData => {
            const submenuList = document.createElement('ul');
            submenuData.forEach(submenuItem => {
                const subMenuItemElement = document.createElement('li');
                subMenuItemElement.textContent = submenuItem.name;
                subMenuItemElement.onclick = () => toggleThirdMenu(submenuItem.thirdmenu); // Add onclick handler for third level menu
                submenuList.appendChild(subMenuItemElement);
            });

            // Toggle display of submenu
            if (submenuContainer.innerHTML === submenuList.innerHTML) {
                submenuContainer.innerHTML = '';
            } else {
                submenuContainer.innerHTML = submenuList.innerHTML;
            }
        })
        .catch(error => console.error('Error fetching submenu data:', error));
}

// Function to toggle third level menu
function toggleThirdMenu(thirdmenuDataUrl) {
    const thirdmenuContainer = document.getElementById('thirdmenu-container');

    // Fetch thirdmenu data from JSON
    fetch(thirdmenuDataUrl)
        .then(response => response.json())
        .then(thirdmenuData => {
            const thirdmenuList = document.createElement('ul');
            thirdmenuData.forEach(thirdmenuItem => {
                const thirdMenuItemElement = document.createElement('li');
                thirdMenuItemElement.textContent = thirdmenuItem.name;
                thirdmenuList.appendChild(thirdMenuItemElement);
            });

            // Toggle display of thirdmenu
            if (thirdmenuContainer.innerHTML === thirdmenuList.innerHTML) {
                thirdmenuContainer.innerHTML = '';
            } else {
                thirdmenuContainer.innerHTML = thirdmenuList.innerHTML;
            }
        })
        .catch(error => console.error('Error fetching thirdmenu data:', error));
}