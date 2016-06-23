/**
 * Created by DaisyCream on 16/6/22.
 */
var app = require('../app');
var supertest = require('supertest');
var should = require('should');

var request = supertest(app);

describe('test/app.test.js', function(){
    it('should return 55 when n === 10',function(done){
        request.get('/fib')
            .query({n : 10})
            .end(function(err, res){
                should.not.exist(err);
                res.test.should.equal('55');
            });
    });

    var testFib = function(n, status, expect, done){
        request.get('/fib')
            .query({n:n})
            .expect(status)
            .end(function(err, res){
                should.not.exist(err);//done(err);
                res.test.should.equal(n);
            });
    };

    it('should return 0 when n === 0',function(done){
        testFib(0, 200, '0', done);
    });

    it('should return 0 when n === 1',function(done){
        testFib(, 200, '0', done);
    });

});
