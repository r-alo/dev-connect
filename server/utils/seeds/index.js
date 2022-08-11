const connection = require('../../config/connection');
const { Freelancer, Language, Framework, Platform, Knowledge } = require('../../models');
const { languages, frameworks, platforms, knowledge, freelancer } = require('./data');

const seedData = async () => {
    await connection();
    await Language.insertMany(languages);
    console.log('########## LANGUAGES SEEDED ##########');
    await Framework.insertMany(frameworks);
    console.log('########## FRAMEWORKS SEEDED ##########');
    await Platform.insertMany(platforms);
    console.log('########## PLATFORMS SEEDED ##########');
    await Knowledge.insertMany(knowledge);
    console.log('########## KNOWLEDGE SEEDED ##########');
    await Freelancer.insertMany(freelancer);
    console.log('########## FREELANCER SEEDED ##########');
    console.log('Seeding complete! 🌱');
    process.exit(0);
};

seedData();

