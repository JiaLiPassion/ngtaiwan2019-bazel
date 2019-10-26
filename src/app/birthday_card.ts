// birthday_card.ts
import { User } from '../lib';

/** Prints a birthday greeting for the given user to the console. */
export function printBirthdayGreeting(user: User) {
  console.log(`Happy birthday ${user.name}, ${user.birthday} is your day!`);
}
