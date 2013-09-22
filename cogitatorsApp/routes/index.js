
/*
* GET home page.
*/

module.exports = function (app) {

    //Home page without layout
    app.get('/homepage', function (req, res) {       
        res.render('homepage.ejs',{layout:false});
    });

    app.get('/whatwedo', function (req, res) {       
        res.render('whatwedo.ejs');
    });

     app.get('/howwedo', function (req, res) {       
        res.render('howwedo.ejs');
    });

     app.get('/services', function (req, res) {       
        res.render('services.ejs');
    });

     app.get('/aboutus', function (req, res) {       
        res.render('aboutus.ejs');
    });

     app.get('/contactus', function (req, res) {       
        res.render('contactus.ejs');
    });
};