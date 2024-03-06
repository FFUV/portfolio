document.addEventListener("DOMContentLoaded", function() {
    const coolText = document.querySelector('.cool-text');
    coolText.addEventListener('click', playAnimation);

    function playAnimation() {
        alert("Cool animation goes here!");
        // Add your animation code here
    }

    // GitHub Projects
    const projects = [
        {
            name: "RepoDr",
            url: "https://github.com/FFUV/RepoDr",
            description: "A tool for analyzing GitHub repositories."
        },
        {
            name: "Ranscumware",
            url: "https://github.com/FFUV/Ranscumware",
            description: "A ransomware simulation tool."
        },
        {
            name: "intlink",
            url: "https://github.com/FFUV/intlink",
            description: "A tool for backdooring minecraft servers."
        },
        {
            name: "Senpai-Bot",
            url: "https://github.com/FFUV/Senpai-Bot",
            description: "A Hack.chat bot with various utilities and fun commands."
        },
        {
            name: "Periphery",
            url: "https://github.com/FFUV/Periphery",
            description: "A Monte Carlo Pi Calculator."
        }
    ];

    const portfolioSection = document.getElementById('portfolio');
    const projectList = document.createElement('ul');

    projects.forEach(project => {
        const listItem = document.createElement('li');
        const projectLink = document.createElement('a');
        projectLink.href = project.url;
        projectLink.textContent = project.name;
        projectLink.target = "_blank";

        const projectDesc = document.createElement('p');
        projectDesc.textContent = project.description;

        listItem.appendChild(projectLink);
        listItem.appendChild(projectDesc);
        projectList.appendChild(listItem);
    });

    portfolioSection.appendChild(projectList);
});
