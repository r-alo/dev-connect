const languages = [
    {language: 'HTML'},
    {language: 'CSS'},
    {language: 'JavaScript'},
];

const frameworks = [
    {framework: 'Sequelize'},
    {framework: 'Mongoose'},
    {framework: 'React'},
];

const platforms = [
    {platform: 'Heroku'},
    {platform: 'GitHub'},
    {platform: 'GitLab'},
];

const knowledge = [
    {knowledge: 'Git'},
    {knowledge: 'PWA'},
    {knowledge: 'TDD'},
];

const freelancer = [
    {firstName: 'Richard', lastName: 'Guarnieri', password: '12345678', email: 'example@example.com', phone: '123456789', github: 'richardguarnieri', company: 'none', languages: [{language: 'HTML'}, {language: 'CSS'}], frameworks: [{framework: 'React'}], platforms: [{platform:'Heroku'}], knowledge: [{knowledge: 'Git'}]},
];

module.exports = { languages, frameworks, platforms, knowledge, freelancer };


