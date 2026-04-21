fetch("data.json")
  .then(response => response.json())
  .then(data => {

    const skillsList = document.getElementById("skillsList");
    const projectsList = document.getElementById("projectsList");

    // UMIEJĘTNOŚCI
    data.umiejetnosci.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // PROJEKTY
    data.projekty.forEach(project => {
        const li = document.createElement("li");
        li.textContent = project;
        projectsList.appendChild(li);
    });

  })
  .catch(error => {
    console.error("Błąd:", error);
  });