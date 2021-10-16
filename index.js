var rs = require("readline-sync")
let chalk = require('chalk')

let log = console.log
let score = 0;
let ch = "";

let user = rs.question(chalk.yellow("Player Name | "));

log("1 > In the following which one is not an Anime series ? ");
log("(a) Doremon         (b) Naruto");
log("(c) One Piece       (d) Baruto");

ch = rs.question("Answer > ");
if(ch == "a")
{
  score += 5;
}
else
{
  score -= 2;
}

log(user +" | "+score);