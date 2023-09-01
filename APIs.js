import fetch from 'node-fetch';

const username = 'Mb4y4'
const token = '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';


fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
        authorisation: `token ${token}`,
    },
})

.then((response) => response.json() )
.then((repos) => {
    repos.forEach((repo) =>{
        console.log(`Repo: ${repo.name}`);
        console.log(`Repo: ${repo.description}`);
    });
})

.catch((error) => {
    console.log('Error fetching data:', error);
});