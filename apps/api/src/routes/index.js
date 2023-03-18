const projects = require('./projects.router.js');
const profile = require('./profile.router.js');
const auth = require('./auth.router.js');
const label = require('./label.router.js');
const file = require('./file.router')
const image = require('./image.router.js');

module.exports =  {
    projects,
    profile,
    auth,
    label,
    image,
    file

}
