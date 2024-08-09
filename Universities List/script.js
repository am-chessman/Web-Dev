// Sample data structure for countries and universities
const data = {
    "Africa": ["Nigeria", "South Africa", "Kenya"],
    "Asia": ["China", "India", "Japan"],
    "Europe": ["United Kingdom", "Germany", "France"],
    "North America": ["United States", "Canada", "Mexico"],
    "South America": ["Brazil", "Argentina", "Chile"],
    "Oceania": ["Australia", "New Zealand", "Fiji"]
};

// Function to display countries in the selected continent
function showCountries(continent) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = ''; // Clear previous content

    if (data[continent]) {
        data[continent].forEach(country => {
            contentArea.innerHTML += `
                <div class="col-sm-4 country-card">
                    <div class="card">
                        <img src="https://via.placeholder.com/150" class="card-img-top" alt="${country}">
                        <div class="card-body">
                            <h5 class="card-title">${country}</h5>
                            <p class="card-text">Click to view universities.</p>
                            <a href="#" class="btn btn-primary" onclick="showUniversities('${country}')">View Universities</a>
                        </div>
                    </div>
                </div>
            `;
        });
    }
}

// Function to display universities in the selected country (mocked for demo)
function showUniversities(country) {
    alert(`Displaying universities in ${country}`);
}
