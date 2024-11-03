// Event listener for the search button
document.getElementById('searchButton').addEventListener('click', function () {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = ''; // Clear previous results

    // Check if the searched place has attractions
    if (query === 'india' || query === 'paris' || query === 'tokyo' || query === 'new york') {
        searchResults.innerHTML = '<p>Results found! Check Top Attractions for more details.</p>';
        showAttractions(query); // Show attractions based on the query
    } else {
        searchResults.innerHTML = `<p>No attractions found for "${query}". Please try another place.</p>`;
    }
});

// Function to show Home page
function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('attractions-page').style.display = 'none';
    document.getElementById('map-page').style.display = 'none';
    document.getElementById('contact-page').style.display = 'none';
    document.getElementById('local-tips').style.display = 'none';
}

// Function to show Top Attractions
function showAttractions(query) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('attractions-page').style.display = 'block';

    const attractions = {
        "india": {
            attractions: [
                {
                    name: "Taj Mahal, Agra",
                    description: "The Taj Mahal is one of the Seven Wonders of the World, known for its breathtaking beauty and intricate white marble architecture.",
                    visitorDetails: "Open daily from sunrise to sunset, except Fridays.",
                    image: "images/taj-mahal.jpg",
                    tips: {
                        food: "Try local Mughlai cuisine nearby.",
                        transport: "Auto-rickshaws are readily available.",
                        culture: "Respect local customs and dress modestly."
                    }
                },
                {
                    name: "Qutub Minar, New Delhi",
                    description: "The Qutub Minar is a UNESCO World Heritage Site and one of the tallest brick minarets in the world.",
                    visitorDetails: "Open daily from 7:00 AM to 5:00 PM.",
                    image: "images/qutub-minar.jpg",
                    tips: {
                        food: "Don't miss trying street food at nearby markets.",
                        transport: "Use the metro for easy access.",
                        culture: "Explore surrounding historical sites."
                    }
                },
                {
                    name: "Gateway of India, Mumbai",
                    description: "The Gateway of India is an iconic arch-monument built in the early 20th century in Mumbai. It overlooks the Arabian Sea.",
                    visitorDetails: "Open all day, year-round.",
                    image: "images/gateway-of-india.jpg",
                    tips: {
                        food: "Sample local seafood dishes at nearby restaurants.",
                        transport: "Ferries available for boat tours.",
                        culture: "Visit during sunset for stunning views."
                    }
                },
                {
                    name: "Hawa Mahal, Jaipur",
                    description: "Hawa Mahal is a stunning palace in Jaipur made of red and pink sandstone, built in 1799.",
                    visitorDetails: "Open from 9:00 AM to 5:00 PM daily.",
                    image: "images/hawa-mahal.jpg",
                    tips: {
                        food: "Try traditional Rajasthani thali nearby.",
                        transport: "Cycle rickshaws are popular in Jaipur.",
                        culture: "Attend local festivals for cultural insights."
                    }
                },
                {
                    name: "Mysore Palace, Mysore",
                    description: "Mysore Palace is a magnificent royal residence in Mysore, known for its grand architecture and opulent interiors.",
                    visitorDetails: "Open daily from 10:00 AM to 5:30 PM.",
                    image: "images/mysore-palace.jpg",
                    tips: {
                        food: "Taste Mysore Pak, a local sweet delicacy.",
                        transport: "Use local buses for easy travel.",
                        culture: "Visit during Dussehra for grand celebrations."
                    }
                },
                {
                    name: "Kerala Backwaters, Kerala",
                    description: "The backwaters of Kerala are a network of interconnected lakes, rivers, and canals running parallel to the Arabian Sea.",
                    visitorDetails: "Best time to visit is during the winter months, from October to February.",
                    image: "images/kerala-backwaters.jpg",
                    tips: {
                        food: "Savor traditional Kerala meals, especially fish curry.",
                        transport: "Houseboats are a unique way to explore the backwaters.",
                        culture: "Engage with local fishing communities to learn about their way of life."
                    }
                },
                {
                    name: "Golden Temple, Amritsar",
                    description: "The Golden Temple is the holiest Sikh shrine, located in Amritsar.",
                    visitorDetails: "Open 24 hours, 7 days a week.",
                    image: "images/golden-temple.jpg",
                    tips: {
                        food: "Enjoy the free langar (community meal) served at the temple.",
                        transport: "Auto-rickshaws are a convenient way to travel around Amritsar.",
                        culture: "Respect the religious significance of the site."
                    }
                }
            ]
        },
    
            
        
        "paris": {
            attractions: [
                {
                    name: "Eiffel Tower",
                    description: "An iconic symbol of Paris, the Eiffel Tower offers stunning views of the city.",
                    visitorDetails: "Open daily from 9:30 AM to 11:45 PM.",
                    image: "images/eiffel-tower.jpg",
                    tips: {
                        food: "Try crepes from a street vendor.",
                        transport: "Use the Metro for easy access.",
                        culture: "Visit in the evening for a light show."
                    }
                },
                {
                    name: "Louvre",
                    description: "The world's largest art museum and a historic monument in Paris.",
                    visitorDetails: "Open daily except Tuesdays from 9 AM to 6 PM.",
                    image: "images/louvre.jpg",
                    tips: {
                        food: "Explore the nearby cafes for French cuisine.",
                        transport: "Walk or take the Metro for easy access.",
                        culture: "Plan ahead for special exhibitions."
                    }
                },
                {
                    name: "Seine River",
                    description: "The Seine River runs through the heart of Paris, offering picturesque views.",
                    visitorDetails: "Enjoy boat tours available year-round.",
                    image: "images/seine-river.jpg",
                    tips: {
                        food: "Pack a picnic for a scenic riverside lunch.",
                        transport: "Bikes and walkways are available along the river.",
                        culture: "Enjoy evening walks for a romantic atmosphere."
                    }
                }
            ]
        },
    
    
        "tokyo": {
            attractions: [
                {
                    name: "Tokyo Tower",
                    description: "A communications and observation tower inspired by the Eiffel Tower.",
                    visitorDetails: "Open daily from 9 AM to 11 PM.",
                    image: "images/tokyo-tower.jpg",
                    tips: {
                        food: "Try sushi at nearby restaurants.",
                        transport: "Use the subway for convenient travel.",
                        culture: "Visit at night for breathtaking city views."
                    }
                },
                {
                    name: "Sensoji Temple",
                    description: "Tokyo's oldest temple, located in Asakusa.",
                    visitorDetails: "Open 24 hours, with shops open from 10 AM to 5 PM.",
                    image: "images/sensoji-temple.jpg",
                    tips: {
                        food: "Sample traditional snacks from vendors.",
                        transport: "Easily accessible via public transport.",
                        culture: "Participating in rituals can enhance your experience."
                    }
                },
                {
                    name: "Shibuya Crossing",
                    description: "One of the busiest pedestrian crossings in the world.",
                    visitorDetails: "Open for viewing anytime.",
                    image: "images/shibuya-crossing.jpg",
                    tips: {
                        food: "Explore nearby restaurants for diverse cuisine.",
                        transport: "A must-visit spot, easily reachable by train.",
                        culture: "Experience the vibrant city atmosphere."
                    }
                },
                {
                    name: "Tokyo Skytree",
                    description: "The tallest structure in Japan, offering panoramic views.",
                    visitorDetails: "Open daily from 8 AM to 10 PM.",
                    image: "images/Tokyo Skytree.jpg",
                    tips: {
                        food: "Enjoy dining options available at the base.",
                        transport: "Take the train for quick access.",
                        culture: "Check for special events or exhibitions."
                    }
                },
                {
                    name: "Meiji Shrine",
                    description: "A Shinto shrine dedicated to Emperor Meiji and Empress Shoken.",
                    visitorDetails: "Open daily from sunrise to sunset.",
                    image: "images/Meiji Shrine.jpg",
                    tips: {
                        food: "Visit nearby cafes for a peaceful break.",
                        transport: "Walk from Harajuku Station for scenic views.",
                        culture: "Participate in traditional rituals for a deeper understanding."
                    }
                }
                
    
            ]
        },
        "new york": {
            attractions: [
                {
                    name: "Statue of Liberty",
                    description: "A symbol of freedom and democracy, located on Liberty Island.",
                    visitorDetails: "Open daily from 8:30 AM to 6 PM.",
                    image: "images/statue-of-liberty.jpg",
                    tips: {
                        food: "Try classic New York-style pizza nearby.",
                        transport: "Ferry service available from Battery Park.",
                        culture: "Consider visiting Ellis Island for history."
                    }
                },
                {
                    name: "Central Park",
                    description: "An urban park in New York City that offers a green oasis.",
                    visitorDetails: "Open year-round, 24 hours a day.",
                    image: "images/central-park.jpg",
                    tips: {
                        food: "Pack a picnic and enjoy it on the grass.",
                        transport: "Subway and buses are convenient options.",
                        culture: "Explore the park's cultural attractions."
                    }
                },
                {
                    name: "Times Square",
                    description: "Known for its bright lights and Broadway theaters.",
                    visitorDetails: "Open year-round, 24 hours a day.",
                    image: "images/times-square.jpg",
                    tips: {
                        food: "Explore nearby restaurants for diverse options.",
                        transport: "Subway stations nearby provide easy access.",
                        culture: "Attend a Broadway show for a unique experience."
                    }
                },
                {
                    name: "Empire State Building",
                    description: "A famous skyscraper with observatories offering stunning city views.",
                    visitorDetails: "Open daily from 8 AM to 2 AM.",
                    image: "images/empire-state-building.jpg",
                    tips: {
                        food: "Visit nearby cafes and eateries.",
                        transport: "Subway and buses serve the area well.",
                        culture: "Consider a night visit for spectacular skyline views."
                    }
                }
    
            ]
        }
    };

    const selectedAttractions = attractions[query];

    // Display attractions for the selected location
    const attractionsList = document.getElementById('attractions-list');
    attractionsList.innerHTML = ''; // Clear previous attractions

    if (selectedAttractions && selectedAttractions.attractions.length > 0) {
        selectedAttractions.attractions.forEach(attraction => {
            const attractionDiv = document.createElement('div');
            attractionDiv.classList.add('attraction');

            attractionDiv.innerHTML = `
                <h3>${attraction.name}</h3>
                <img src="${attraction.image}" alt="${attraction.name}">
                <p>${attraction.description}</p>
                <p><strong>Visitor Details:</strong> ${attraction.visitorDetails}</p>
                <h4>Local Tips:</h4>
                <ul>
                    <li><strong>Food:</strong> ${attraction.tips.food}</li>
                    <li><strong>Transport:</strong> ${attraction.tips.transport}</li>
                    <li><strong>Culture:</strong> ${attraction.tips.culture}</li>
                </ul>
            `;

            attractionsList.appendChild(attractionDiv);
        });
    } else {
        attractionsList.innerHTML = `<p>No attractions found for "${query}". Please try another place.</p>`;
    }
}

// Function to show Interactive Map
function showMap() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('attractions-page').style.display = 'none';
    document.getElementById('map-page').style.display = 'block';
    document.getElementById('contact-page').style.display = 'none';
    document.getElementById('local-tips').style.display = 'none';
}

// Function to show Contact page
function showContact() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('attractions-page').style.display = 'none';
    document.getElementById('map-page').style.display = 'none';
    document.getElementById('contact-page').style.display = 'block';
    document.getElementById('local-tips').style.display = 'none';
}
