var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');
var userMsg = [];
var count = 0;
var user = [];

var targetUrl = "https://cnodejs.org/";

superagent.get(targetUrl).end(function(err, urlHtml){
    if(err){
        console.error(err);
    }
    var $ = cheerio.load(urlHtml.text);


    $('#topic_list .user_avatar').each(function(index, element){
        var $element = $(element);

        var userUrl = url.resolve(targetUrl, $element.attr('href'));
        user.push(userUrl);
    });

    getUserMsg(user[count]);
    //getFirstMsg(user[0]);
    console.log(user.length);


});


function getUserMsg(userUrl){
        superagent.get(userUrl).end(function(err, msg){
            if(err){
                //console.log(err);
                //return;
            }
            count++;
            var $ = cheerio.load(msg.text);

            userMsg.push({
                name : $('#content .dark').html(),
                score : $('#content .big').text().trim()
            });

            if(count == 40){
                console.log(userMsg);
                console.log(userMsg.length);
                return;
            }
            getUserMsg(user[count]);

        });
}

//function getUserMsg(userUrl){
//    userUrl.forEach(function(item){
//        superagent.get(item).end(function(err, msg){
//            if(err){
//                //return;
//            }
//
//            var $ = cheerio.load(msg.text);
//
//            userMsg.push({
//                name : $('#content .dark').html(),
//                score : $('#content .big').text().trim(),
//                'count' : count
//            });
//
//            if(count == 39){
//                console.log(userMsg);
//            }
//            count++;
//        });
//
//    })
//
//}


//function getFirstMsg(userUrl){
//    superagent.get(userUrl).end(function(err, msg){
//        if(err){
//            console.error(err);
//        }
//
//        var $ = cheerio.load(msg.text);
//        console.log($("#content .dark").html());
//    });
//}