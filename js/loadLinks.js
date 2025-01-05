
document.addEventListener("DOMContentLoaded", () => {
    // Load the JSON file
    fetch("/links.json")

        .then(response => response.json())
        .then(data => {
            const columnList = document.getElementById("columnList");

            Object.entries(data).forEach(([category, links]) => {
               //Category items 
                const categoryItem = document.createElement("li");
                categoryItem.classList.add("column");

                //Category title
                const categoryTitle = document.createElement("a");
                categoryTitle.textContent = category;
                categoryItem.appendChild(categoryTitle);

                //Items for each category
                const linksList = document.createElement("ul");
                links.forEach(link => {
                    const linkItem = document.createElement("li");
                    const anchor = document.createElement("a");
                    anchor.href = link.link;
                    anchor.textContent = link.text;
                    linkItem.appendChild(anchor);
                    linksList.appendChild(linkItem);
                });

                categoryItem.appendChild(linksList);
                columnList.appendChild(categoryItem);
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
});
