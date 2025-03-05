document.addEventListener("DOMContentLoaded", function () {
    fetch("https://github.com/ivyrose54/onlineweb-courses/blob/main/courses.json") // Replace with your actual URL
        .then(response => response.json())
        .then(data => {
            let subjectsList = document.getElementById("subjects-list");
            data.courses.forEach(course => {
                let courseItem = document.createElement("p");
                courseItem.textContent = `${course.year_level} Year, ${course.sem} Sem - ${course.code}: ${course.description} (${course.credit} Credits)`;
                subjectsList.appendChild(courseItem);
            });
        })
        .catch(error => console.error("Error loading courses:", error));
});
