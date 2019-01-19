/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

const mysql = require('mysql');
const request = require('request'); // You might need to npm install the request module!
const expect = require('chai').expect;
const path = require('path');
const fs = require('fs');

const studentsData = require('../../student.json');
describe('Sprint-database', () => {
  describe('student.json', function () {
    it('should put correct class on students.json', function() {
      let rawMessage = '기수를 숫자만! 입력해주세요! 예)10'
      expect(studentsData.theClass === rawMessage || studentsData.theClass === "").to.be.false
    })
  
    it('should put correct students on students.json', function() {
      let rawMessage = '스프린트를 진행하는 수강생분의 이름을 한글로! 적어주세요! 예)존도우, 제인도우'
      expect(studentsData.students === rawMessage || studentsData.students === "").to.be.false
    })
  });
  
  describe('Persistent Node Chat Server', function() {
    var dbConnection;
  
    beforeEach(function(done) {
      dbConnection = mysql.createConnection({
        user: 'root',
        password: '',
        database: 'chat'
      });
      dbConnection.connect();
      
      var tablename = ""; // TODO: fill this out
      
      /* Empty the db table before each test so that multiple tests
      * (or repeated runs of the tests) won't screw each other up: */
      dbConnection.query('truncate ' + tablename, done);
    });
  
    afterEach(function() {
      dbConnection.end();
    });
    
    it('Should insert posted messages to the DB', function(done) {
      // Post the user to the chat server.
      request({
        method: 'POST',
        uri: 'http://127.0.0.1:3000/classes/users',
        json: { username: 'Valjean' }
      }, function () {
        // Post a message to the node chat server:
        request({
          method: 'POST',
          uri: 'http://127.0.0.1:3000/classes/messages',
          json: {
            username: 'Valjean',
            message: 'In mercy\'s name, three days is all I need.',
            roomname: 'Hello'
          }
        }, function () {
          // Now if we look in the database, we should find the
          // posted message there.
  
          // TODO: You might have to change this test to get all the data from
          // your message table, since this is schema-dependent.
          var queryString = 'SELECT * FROM messages';
          var queryArgs = [];
  
          dbConnection.query(queryString, queryArgs, function(err, results) {
            // Should have one result:
            expect(results.length).to.equal(1);
  
            // TODO: If you don't have a column named text, change this test.
            expect(results[0].text).to.equal('In mercy\'s name, three days is all I need.');
  
            done();
          });
        });
      });
    });
  
    it('Should output all messages from the DB', function(done) {
      // Let's insert a message into the db
         var queryString = "";
         var queryArgs = [];
      // TODO - The exact query string and query args to use
      // here depend on the schema you design, so I'll leave
      // them up to you. */
  
      dbConnection.query(queryString, queryArgs, function(err) {
        if (err) { throw err; }
  
        // Now query the Node chat server and see if it returns
        // the message we just inserted:
        request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
          var messageLog = JSON.parse(body);
          expect(messageLog[0].text).to.equal('Men like you can never change!');
          expect(messageLog[0].roomname).to.equal('main');
          done();
        });
      });
    });
  });
  
  describe('REVIEW.md', () => {
    it('should review on REVIEW.md\n      Bare Minimum을 완료하셨다면 REVIEW.md를 작성하고 Pull request를 만든 뒤 Advanced 진행부탁드립니다!', function() {
      let rawFilepath = path.join(__dirname, 'raw_review.md')
      let studentFilepath = path.join(__dirname, '../../REVIEW.md')
  
      let rawBuf = fs.readFileSync(rawFilepath);
      let studentBuf = fs.readFileSync(studentFilepath);
      expect(rawBuf.equals(studentBuf)).to.be.false
    })
  });
})