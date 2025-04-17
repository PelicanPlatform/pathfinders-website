const SKIP_DAYS = new Set(["12/27/2024"]);

const MEETING_NOTES: Record<string, string> = {
  "12/20/2024":
    "https://docs.google.com/document/d/1NF2NQfw_qx4RGfV1dM2tZOGCB6gQSxi12hI5JTfgxv8/edit?tab=t.0#heading=h.2ez3c1bebngo",
};

/**
 * Gets the last meetings
 * @param date the date to start, defaulting to now
 * @returns the link to the last meetings notes,
 *          or "" if it has not been updated
 */
export function getLastMeetingNotes(date?: Date): string {
  const dateStr = getLastMeeting(date);
  return MEETING_NOTES[dateStr] ?? "";
}

/**
 * Gets the last meeting date.
 * @param date the date to start, defaulting to now
 * @returns the string representing the last meeting date
 */
export function getLastMeeting(date?: Date): string {
  date = date ?? new Date();

  // use yesterday to exclude current friday
  const yesterday = new Date(date.getTime() - 1000 * 60 * 60 * 24);

  // calculate last friday
  const dayOfTheWeek = yesterday.getDay();
  const dayOffset = fridayOffset(dayOfTheWeek)[0];
  const lastFriday = new Date(
    yesterday.getTime() + 1000 * 60 * 60 * 24 * dayOffset
  );

  const dateStr = lastFriday.toLocaleString("en-US", {
    month: "numeric",
    day: "2-digit",
    year: "numeric",
    timeZone: "America/Chicago",
  });

  // if last friday was skipped, try again
  if (SKIP_DAYS.has(dateStr)) {
    // infinite loop avoided because yesterday was used
    return getLastMeeting(lastFriday); // go 1 week earlier
  } else {
    return dateStr;
  }
}

/**
 * Gets the next meeting date.
 * @param date the date to start, defaulting to now
 * @returns the string representing the next meeting date
 */
export function getNextMeeting(date?: Date): string {
  date = date ?? new Date();

  // calculate next friday (including today)
  const dayOfTheWeek = date.getDay();
  const dayOffset = fridayOffset(dayOfTheWeek)[1];
  const nextFriday = new Date(date.getTime() + 1000 * 60 * 60 * 24 * dayOffset);

  const dateStr = nextFriday.toLocaleString("en-US", {
    month: "numeric",
    day: "2-digit",
    year: "numeric",
    timeZone: "America/Chicago",
  });

  // if next friday is skipped, try again
  if (SKIP_DAYS.has(dateStr)) {
    // avoid infinite loop by adding 1 day
    return getNextMeeting(new Date(nextFriday.getTime() + 1000 * 60 * 60 * 24)); // go 1 week later
  } else {
    return dateStr;
  }
}

/**
 * Gets the offset to the previous and next friday, depending on the current
 * day of week.
 *
 * @param dayOfWeek day of the week, ranging from 0 to 6
 * @returns a tuple containing `[(day offset to last friday), (day offset to next friday)]`
 */
function fridayOffset(dayOfWeek: number): [number, number] {
  switch (dayOfWeek) {
    case 0:
      return [-2, 5];
    case 1:
      return [-3, 4];
    case 2:
      return [-4, 3];
    case 3:
      return [-5, 2];
    case 4:
      return [-6, 1];
    case 5:
      return [0, 0];
    case 6:
      return [-1, 6];
    default:
      throw new RangeError("dayOfWeek is not valid day of week");
  }
}
