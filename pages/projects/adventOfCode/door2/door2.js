import fs from "fs";
import Link from "next/link";

export default function Elfsnacks({ score }) {
  return (
    <div className="container-content mx-auto mt-2 flex flex-col justify-center self-auto align-middle text-slate-300">
      <div className="container-card p-10">
        
        <p className="text-2xl">
          <a href="/aoc/dddduel.txt" target="_blank" className="underline">
            input of puzzle
          </a>
        </p>
        <p>Solution to puzzle: {score}</p>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // rock = 1 paper = 2 scissors = 3 score
  // turns out the first part of these variables are not needed,
  // but building it this way let me switch the answers below around easily
  var a, x;
  a = x = 1;
  var b, y;
  b = y = 2;
  var c, z;
  c = z = 3;
  var score = 0;

  const input = fs
    .readFileSync("pages/projects/adventOfCode/door2/dddduel.txt", "utf-8")
    .toString()
    .split("\r")
    .join("");

  const medium = input
    .split("\n")
    .map((round) => round.replace(/\s/g, "").split(""));

  // initially got this wrong cause I thought my answer was 1st in the array
  // changed my if statements to match that my answer is 2nd in the array yay!
  const output = medium.filter((move) => {
    var win = 6;
    var draw = 3;
    var loss = 0;

    // Solution for part 1
    // if (move[0] === "A" && move[1] === "X") {
    //   score = score + draw + x;
    // } else if (move[0] === "B" && move[1] === "Y") {
    //   score = score + draw + y;
    // } else if (move[0] === "C" && move[1] === "Z") {
    //   score = score + draw + z;
    // } else if (move[0] === "A" && move[1] === "Z") {
    //   score = score + loss + z;
    // } else if (move[0] === "A" && move[1] === "Y") {
    //   score = score + win + y;
    // } else if (move[0] === "B" && move[1] === "X") {
    //   score = score + loss + x;
    // } else if (move[0] === "B" && move[1] === "Z") {
    //   score = score + win + z;
    // } else if (move[0] === "C" && move[1] === "X") {
    //   score = score + win + x;
    // } else if (move[0] === "C" && move[1] === "Y") {
    //   score = score + loss + y;
    // }

    // Solution for part 2
    if (move[1] === "X" && move[0] === "A") {
      score = score + loss + z;
    } else if (move[1] === "X" && move[0] === "B") {
      score = score + loss + x;
    } else if (move[1] === "X" && move[0] === "C") {
      score = score + loss + y;
    } else if (move[1] === "Y" && move[0] === "A") {
      score = score + draw + x;
    } else if (move[1] === "Y" && move[0] === "B") {
      score = score + draw + y;
    } else if (move[1] === "Y" && move[0] === "C") {
      score = score + draw + z;
    } else if (move[1] === "Z" && move[0] === "A") {
      score = score + win + y;
    } else if (move[1] === "Z" && move[0] === "B") {
      score = score + win + z;
    } else if (move[1] === "Z" && move[0] === "C") {
      score = score + win + x;
    }

    return score;
  });

  return {
    props: {
      score,
    },
  };
}
