// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber
test('Check if 000-000-0000 is a valid phone number', () => {
    expect(functions.isPhoneNumber('000-000-0000')).toBe(true);
});
test('Check if (123)456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
});
test('Check if 0123456789 is a valid phone number', () => {
    expect(functions.isPhoneNumber('0123456789')).toBe(false);
});
test('Check if 123-123-abcd is a valid phone number', () => {
    expect(functions.isPhoneNumber('123-123-abcd')).toBe(false);
});

//isEmail
test('rrzhou@ucsd.edu is an email', ()=>{
    expect(functions.isEmail('rrzhou@ucsd.edu')).toBe(true);
  });
test('test@some.thing is an email', () => {
    expect(functions.isEmail('test@some.thg')).toBe(true);
});
test('please@fail is invalid', () => {
    expect(functions.isEmail('please@fail')).toBe(false);
});
test('@@@gmail is invalid', () => {
    expect(functions.isEmail('@@@gmail')).toBe(false);
});

//isStrongPassword
test('Check if team9_10 is a strong password', () => {
    expect(functions.isStrongPassword('team9_10')).toBe(true);
});
test('Check if will_to_live is a strong password', () => {
    expect(functions.isStrongPassword('will_to_live')).toBe(true);
});
test('Check if 9_plus_10 is a strong password', () => {
    expect(functions.isStrongPassword('9_plus_10')).toBe(false);
});
test('Check if abc^^&&&def is a strong password', () => {
    expect(functions.isStrongPassword('abc^^&&&def')).toBe(false);
});

//isDate
test('Check if 08/07/2000 is a valid date', () => {
    expect(functions.isDate('08/07/2000')).toBe(true);
});
test('Check if 1/13/2000 is a valid date', () => {
    expect(functions.isDate('1/13/2000')).toBe(true);
});
test('Check if 028/07/2000 is a valid date', () => {
    expect(functions.isDate('028/07/2000')).toBe(false);
});
test('Check if 08/07/200 is a valid date', () => {
    expect(functions.isDate('08/07/200')).toBe(false);
});

//isHexColor
test('#fff is a valid hex color', ()=> {
    let color = '#fff';
    expect(functions.isHexColor(color)).toBe(true);
});
test('#456fff is a valid hex color', ()=> {
    let color = '#456fff';
    expect(functions.isHexColor(color)).toBe(true);
});
test('#xyz is a valid hex color', ()=> {
    let color = '#xyz';
    expect(functions.isHexColor(color)).toBe(false);
});
test('#aaa1231 is a valid hex color', ()=> {
    let color = '#aaa1231';
    expect(functions.isHexColor(color)).toBe(false);
});