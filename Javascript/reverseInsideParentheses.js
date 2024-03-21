// In this kata, you will be given a string of text and valid parentheses, such as "h(el)lo". You must return the string, with only the text inside parentheses reversed, so "h(el)lo" becomes "h(le)lo". However, if said parenthesized text contains parenthesized text itself, then that too must reversed back, so it faces the original direction. When parentheses are reversed, they should switch directions, so they remain syntactically correct (i.e. "h((el)l)o" becomes "h(l(el))o"). This pattern should repeat for however many layers of parentheses. There may be multiple groups of parentheses at any level (i.e. "(1) (2 (3) (4))"), so be sure to account for these.

// For example:

// reverseInParens("h(el)lo") == "h(le)lo";
// reverseInParens("a ((d e) c b)") == "a (b c (d e))";
// reverseInParens("one (two (three) four)") == "one (ruof (three) owt)";
// reverseInParens("one (ruof ((rht)ee) owt)") == "one (two ((thr)ee) four)";
// Input parentheses will always be valid (i.e. you will never get "(()").

// Link to changellenge: https://www.codewars.com/kata/5e07b5c55654a900230f0229/train/javascript

const reverseInParens = str => {
  const rb = /[\[\]]/g;
  const rm = /\([^\(\)]*\)/;
  const mi = {'[':']', ']':'['};
  const mc = {'[':'(', ']':')'};
  let last;
  while (last !== str) {
    last = str;
    str = str.replace(rm, s => {
      s = s.substr(1, s.length-2).replace(rb, s => mi[s]);
      return [']',...s,'['].reverse().join``;
    });
  }
  str = str.replace(rb, s => mc[s]);
  return str;
};

// All of the existing solutions are very difficult to understand so I chose this one which is shorter than the other ones and more understandable