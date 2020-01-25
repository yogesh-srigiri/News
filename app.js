const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const request = require('request');

const app = express();


app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.use(express.static("public"));

const topHeadLines = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=ba6b734c485140619253ae042a43f522'; 
const entertainment = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=ba6b734c485140619253ae042a43f522';
const business= "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ba6b734c485140619253ae042a43f522";
const general= "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=ba6b734c485140619253ae042a43f522";
const health= "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=ba6b734c485140619253ae042a43f522";
const science= "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=ba6b734c485140619253ae042a43f522";
const sports= "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ba6b734c485140619253ae042a43f522";




app.get('/', function(req, res){
   
request(topHeadLines, function(error, response, body){
    var data = JSON.parse(body);  
    var topheadlines = data.articles;
   res.render('display', {
    topheadlines: topheadlines,  
   
        }) 
}); 


});


app.get('/entertainment', function(req ,res ){
request(entertainment, function(error, response, body){
    var data = JSON.parse(body);  
    var Entertainment = data.articles;
    res.render('entertainment', {
        Entertainment: Entertainment,  
   
        }) 
}); 

});

app.get('/business', function(req ,res ){
    request(business, function(error, response, body){
        var data = JSON.parse(body);  
        var Business = data.articles;
        res.render('business', {
            Business: Business,  
       
            }) 
    }); 
    
    });


    app.get('/general', function(req ,res ){
        request(general, function(error, response, body){
            var data = JSON.parse(body);  
            var General = data.articles;
            res.render('general', {
                General: General,  
           
                }) 
        }); 
        
        });


        app.get('/health', function(req ,res ){
            request(health, function(error, response, body){
                var data = JSON.parse(body);  
                var Health = data.articles;
                res.render('health', {
                    Health: Health,  
               
                    }) 
            }); 
            
            });



            app.get('/science', function(req ,res ){
                request(science, function(error, response, body){
                    var data = JSON.parse(body);  
                    var Science = data.articles;
                    res.render('science', {
                        Science: Science,  
                   
                        }) 
                }); 
                
                });


                app.get('/sports', function(req ,res ){
                    request(sports, function(error, response, body){
                        var data = JSON.parse(body);  
                        var Sports = data.articles;
                        res.render('sports', {
                            Sports: Sports,  
                       
                            }) 
                    }); 
                    
                    });











app.listen(3000, function(){
    console.log('port is runnig on 3000')
});










