var expect = require('expect');

var {generateMessage} = require('./message.js');

describe ('generateMessage',() => {
  it ('should generate correct message object', () => {
    var from = 'Anton';
    var text = 'Der Seemann ist da.';
    var message = generateMessage(from,text);
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(message.createdAt).toBeA('number');
  });
})
