var expect = require('expect');

var {isRealString} = require('./validation.js');

describe('isRealString', () => {
  it('should allow real string', () => {
    var str = 'someRealString';
    var res = isRealString(str);
    expect(res).toBe(true);
  })
  it('should reject non-string values', () => {
    var obj = {};
    var res = isRealString(obj);
    expect(res).toBe(false);
  });
  it('should reject string with only spaces', () => {
    var str = '      ';
    var res = isRealString(str);
    expect(res).toBe(false);
  });
  it('should allow string with non-space characters', () => {
    var str = '  Hello  String    ';
    var res = isRealString(str);
    expect(res).toBe(true);
  });
});
