const db = require('../db/connection.js');

exports.getDoctors = (callback) => {
  const queryStr = 'select * from doctors';
  db.any(queryStr, (err, results) => {
    callback(err, results);
  });
};

exports.addDoctor = (params, callback) => {
  const queryStr = 'insert into doctors(name, dob, office, phone, sex) values ($1, $2, $3, $4, $5)';
  db.any(queryStr, params, (err, results) => {
    callback(err, results);
  });
};