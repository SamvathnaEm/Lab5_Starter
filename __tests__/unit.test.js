// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// matches valid phone numbers
// true tests
test('PhoneNumber Test: valid phone number', () => {
  expect(isPhoneNumber("619-611-9111")).toBe(true);
});

test('PhoneNumber Test: Valid phone number', () => {
  expect(isPhoneNumber("(619) 137-9090")).toBe(true);
});

// false tests
test('PhoneNumber Test: invalid US number without dashes', () => {
  expect(isPhoneNumber("00011122333333")).toBe(false);
});

test('PhoneNumber Test: random number', () => {
  expect(isPhoneNumber("10293")).toBe(false);
});

// matches valid emails
// true tests
test('Email address Test: valid email address', () => {
  expect(isEmail("sammy@ucsd.edu")).toBe(true);
});

test('Email address Test: valid email address', () => {
  expect(isEmail("emsam@gmail.com")).toBe(true);
});

// false tests
test('Email address Test: invalid email address', () => {
  expect(isEmail("sammy@ucsd")).toBe(false);
});

test('Email address Test: invalid email address', () => {
  expect(isEmail("gmail.com")).toBe(false);
});

/**
 * The password's first character must be a letter, 
 * it must contain at least 4 characters and no more than 15 characters and no characters other than 
 * letters, numbers and the underscore may be used
 */
// true tests
test('Strong Password Test: valid password', () => {
  expect(isStrongPassword("a_145aba")).toBe(true);
});

test('Strong Password Test: valid password', () => {
  expect(isStrongPassword("abetd123_")).toBe(true);
});

// false tests
test('Strong Password Test: invalid password', () => {
  expect(isStrongPassword("$sammy")).toBe(false);
});

test('Strong Password Test: invalid password', () => {
  expect(isStrongPassword("abdjider_u123456")).toBe(false);
});



// 	This regular expressions matches dates of the form XX / XX / YYYY where
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.
// true tests
test('dates format Test: valid format', () => {
  expect(isDate("06/15/1999")).toBe(true);
});

test('dates format Test: valid format', () => {
  expect(isDate("1/1/2024")).toBe(true);
});
// false tests
test('dates format Test: invalid format', () => {
  expect(isDate("07236666")).toBe(false);
});

test('dates format Test: invalid format', () => {
  expect(isDate("6-6-1999")).toBe(false);
});



// Matches valid 3 or 6 character hex codes used for HTML or CSS.
// true tests
test('Hex color code test: valid hex code (indianRed) ', () => {
  expect(isHexColor("CD5C5C")).toBe(true);
});

test('Hex color code test: valid hex code (lightSalmon)', () => {
  expect(isHexColor("FFA07A")).toBe(true);
});

//false tests
test('Hex color code test: invalid hex code (random number)', () => {
  expect(isHexColor("3849292")).toBe(false);
});

test('Hex color code test: invalid hex code (random alphabet)', () => {
  expect(isHexColor("XABRDC")).toBe(false);
});





