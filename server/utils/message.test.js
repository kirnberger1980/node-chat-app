var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message.js');

describe ('generateMessage',() => {
  it ('should generate correct message object', () => {
    var from = 'Anton';
    var text = 'Der Seemann ist da.';
    var message = generateMessage(from,text);
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Andrew';
    var locationMessage = generateLocationMessage(from,1,1);
    expect(locationMessage.from).toBe(from);
    expect(locationMessage.url).toBe('https://www.google.de/maps?q=1,1');
    expect(locationMessage.createdAt).toBeA('number');
  });
});
