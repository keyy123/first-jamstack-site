const listRepos = async username => {
    try {        
        const repos = await fetch(`
        https://api.github.com/users/${username}/repos?type=owner&sort=updated
        `);
        const res = await repos.json();
        const markup = res.map(repo =>
        `
        <li>
            <a href="${repo.html_url}">${repo.name}</a>
            (${repo.stargazers_count})
        </li>
        `    
        ).join('');
        const content = document.getElementById('content');
        content.innerHTML = `<ul>${markup}</ul>`;
    } catch (error) {
        console.error(error);
    }
}

listRepos('keyy123');