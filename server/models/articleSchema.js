const mongoose = require('mongoose');


const articleSchema = mongoose.Schema ({
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        validate: {
            validator: value => validator.isURL(value, { protocols: ['http', 'https', 'ftp'], require_tld: true, require_protocol: true }),
            message: 'Must be a Valid URL'
        },
    },
    likes: {
        type: Number,
        required: true,
    }
});


module.exports = mongoose.model('Articles', articleSchema);

// * 10 ARTICLES to use * //

    // javascript
// https://betterprogramming.pub/libraries-to-increase-productivity-8fb0c1b7994a
    // python
// https://developer.ibm.com/articles/python-overview-and-basics/
    // css
// https://www.joshwcomeau.com/css/understanding-layout-algorithms/
    // react
// https://www.freecodecamp.org/news/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3?ref=hackernoon.com
    //angular
// https://dev.to/stupidawesome/reactive-adventures-in-angular-introducing-angular-effects-1epf?rel=nofollow
    // html
// https://www.w3docs.com/learn-html/html-article-tag.html
    // html
// http://www.peoplecancode.com/en/paths/3/tutorials/html-and-css-create-simple-article
    // php
// https://phptherightway.com/#frameworks
    // sql
// https://www.red-gate.com/simple-talk/databases/sql-server/t-sql-programming-sql-server/empty-thoughts-working-with-null/
    // sql
// https://learnsql.com/blog/grouping-data-in-microsoft-sql-server/