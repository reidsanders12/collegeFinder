// const API_KEY = "Dlbi2yqcLdtU4U5rrznAuo50IshPmuHZOEAOBWXi";

// async function getSchools() {
//   const resultsPerPage = 20;
//   let currentPage = 0;
//   let totalPages = 1;
//   let allSchools = [];

//   while (currentPage < totalPages) {
//     const response = await fetch(`https://api.data.gov/ed/collegescorecard/v1/schools/?api_key=${API_KEY}&per_page=${resultsPerPage}&page=${currentPage}`);
//     const data = await response.json();
//     const schools = data.results;

//     const results = schools.map(school => ({
//       name: school.school.name,
//       location: `${school.school.city}, ${school.school.state}`,
//     }));

//     allSchools = allSchools.concat(results);
//     currentPage++;
//     totalPages = Math.ceil(data.metadata.total / resultsPerPage);
//   }

//   return allSchools;
// }
// // Wait for the DOM to load before running the JavaScript code
// document.addEventListener('DOMContentLoaded', async () => {
//   const schools = await getSchools();

//   // Sort the list of schools by name in alphabetical order
//   schools.sort((a, b) => a.name.localeCompare(b.name));

//   // Loop through the list of schools and create a list item for each one with a numbered label
//   const schoolList = document.getElementById('school-list');
//   schools.forEach((school, index) => {
//     const listItem = document.createElement('li');
//     listItem.innerText = `${index + 1}. ${school.name}`;
//     schoolList.appendChild(listItem);
//   });
// });



// // getSchools().then(schools => console.log(schools));
