const moongose =  require ("moongose");

const URI = "mongodb://localhost/mern-users";

moongose.connect(URI)
.then(db => console.log("db is conected"))
.catch (err => console.error(err));


module.exports = moongose;