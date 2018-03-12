const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {logging : false});

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull : false
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull : false,
        isUrl : true
    },
    content: {
        type: Sequelize.STRING,
        allowNull : false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    },
    route: {
        type: Sequelize.VIRTUAL,
        get(){return '/wiki/' + this.urlTitle}
    }
});

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull : false
    },
    email: {
        type: Sequelize.STRING,
        allowNull : false,
        validate : {
            isEmail : true
        }
    }
});

module.exports = {
    Page : Page,
    User : User,
    db : db
};



