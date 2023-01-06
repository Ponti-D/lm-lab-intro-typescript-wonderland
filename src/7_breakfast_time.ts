import { endAdventure, haveAdventures } from "..";
import { askQuestion, clear, print } from "../console";

const tarts = [
  "Rainbow-Fish",
  "Grumpy-Pig",
  "Sea-Dragon",
  "White-Cloud",
] as const;

type Tart = typeof tarts[number];

export function afterWokenUp(): void {
  clear(true);

  print("Wait..........These tarts...❓❓❓");
  print(
    "Uh oh! These tarts are not what they seem ❓❓❓ ... There is a note next to them and it says: "
  );
  print(
    "You are in jail for stealing the tarts. To get out of here, you need to pick the right one and EAT IT !! 😮😮😮"
  );
  print("------------------------------------");

  print("👉 Make your choice: ");

  print("------------------------------------");

  tarts.forEach((h, i) => print(`${i} - ${h}`));

  return askQuestion("Which of these tarts do you fancy eating?  ", eatingTart);
}

export function eatingTart(tart: string): void {
  clear(true);

  const number = parseInt(tart);
  print(`${number}`);

  if (isNaN(number)) {
    print(`Are you kidding me?`);
    print(`That's not a number 😭`);
    return endAdventure();
  }
  if (number < 0 || number > tarts.length - 1) {
    print(`😮`);
    print(`${number} is an invalid number 😭`);
    return endAdventure();
  }

  if (tart[number] === "White-Cloud") {
    print(
        '✅ CONGRATULATIONS! You successfully made it through Wonderland! 🥳'
    );
  } else {
    print("you staying forever!");
    return endAdventure();
  }
}
