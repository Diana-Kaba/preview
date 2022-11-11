"use strict";
let longStr =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, soluta nihil. Repellendus itaque placeat ad corporis, non vitae impedit quia deserunt id iste, consequuntur atque aperiam delectus assumenda commodi quaerat?";
let shortStr = "Lorem ipsum dolor.";
function preview(str, n) {
  if (str.length > n) {
    str = str.slice(0, n);
    return str + "...";
  }
  return str;
}

document.write(preview(shortStr, 20) + "<br>");
document.write(preview(longStr, 20));
