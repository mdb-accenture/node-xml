const fs = require('fs'),
  xml2js = require('xml2js'),
  { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const transAsync = promisify(parser.parseString);
const parser = new xml2js.Parser();
const builder = new xml2js.Builder();

// # ASYNC
const xml2json = async (file) => {
  return await transAsync(await readFileAsync(__dirname + `/xml/${file}`));
};
const json2xml = async (file) => {
  return builder.buildObject(
    JSON.parse(await readFileAsync(__dirname + `/json/${file}`))
  );
};

(async () => {
  console.log(JSON.stringify(await xml2json('req.xml'), null, 2));
  console.log(await json2xml('req.json'));
})();

// # CALLBACK
// function xml2json(file, callback) {
//   fs.readFile(__dirname + `/xml/${file}`, function (err, data) {
//     parser.parseString(data, function (err, result) {
//       if (!err) callback(result);
//       else throw Error(err);
//     });
//   });
// }
// function json2xml(file, callback) {
//   fs.readFile(__dirname + `/json/${file}`, function (err, data) {
//     if (!err) callback(builder.buildObject(JSON.parse(data)));
//     else throw Error(err);
//   });
// }
// xml2json('ack.xml', (res) => {
//   console.log(JSON.stringify(res, null, 2));
// });
// json2xml('ack.json', (res) => {
//   console.log(res);
// });

// # RAW
// fs.readFile(__dirname + '/xml/ack.xml', function (err, data) {
//   parser.parseString(data, function (err, result) {
//     if (!err) {
//       json = result;
//       console.log('XML to JSON');
//       console.log(JSON.stringify(json, null, 2));
//       xml = builder.buildObject(json);
//       console.log('JSON to XML');
//       console.log(xml);
//     }
//   });
// });
