/**
 * This script generates various data files for the website.
 *
 * Currently this is just the Pelican team file, however feel free to add your own
 * scripts here to generate other files such as your own team or article data.
 *
 * The basic type used by `StaffCard` is (essentially):
 * ```ts
 *  interface Staff {
 *    name: string;
 *    image: string;
 *    title: string;
 *    status: "Staff" | "Student" | "Past";
 *  }
 * ```
 */

import { writePelicanTeamFile } from "./genPelicanTeam";

writePelicanTeamFile().catch((e) => {
  console.error(e);
  process.exit(1);
});
