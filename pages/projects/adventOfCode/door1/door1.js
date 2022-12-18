import fs from "fs";
import Link from "next/link";

export default function Elfsnacks({ input, output }) {
  return (
    <div className="container-content mx-auto mt-2 flex flex-col justify-center self-auto align-middle text-slate-300">
      <div className="container-card p-4">
        <a
          href="https://adventofcode.com/2022/day/1"
          target="_blank"
          className="mb-10 inline-block text-2xl underline"
          rel="noreferrer"
        >
          Day 1 Puzzle https://adventofcode.com/2022/day/1
        </a>
        <p className="text-xl">
          <a href="/aoc/elfsnacks.txt" target="_blank" className="underline">
            Input of puzzle
          </a>
        </p>
        <p>Solution to puzzle: {output}</p>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const input = fs
    .readFileSync("pages/projects/adventOfCode/door1/elfsnacks.txt", "utf-8")
    .toString()
    .split("\r")
    .join("");

  // Solution 2 - did cannibilise this from a different solution, but I understand a lot of what's going on here
  // split map split reduce sort slice reduce
  const output = input
    .split("\n\n")
    .map((elf) =>
      elf.split("\n").reduce((sum, calorie) => sum + Number(calorie), 0)
    )
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((sum, topElf) => sum + Number(topElf), 0);

  // Solution 1
  // const output = Math.max(
  //   ...input
  //     .split("\n\n")
  //     .map((elf) =>
  //       elf.split("\n").reduce((sum, calorie) => sum + Number(calorie), 0)
  //     )
  // );

  // Return the pages static props
  return {
    props: {
      input,
      output,
    },
  };
}
