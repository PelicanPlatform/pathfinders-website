import { getPaths, getTree } from "./github";
import yaml from "js-yaml";
import fs from "fs";

const DATA_FILE = "src/lib/team/pelican.json";

async function getStaffFromRepo(
  organization: string,
  repo: string,
  branch: string,
  url: string,
  website: Website
): Promise<Staff[]> {
  const tree = await getTree(organization, repo, branch);
  const paths = getPaths(tree);

  // Filter out the non-article paths and pull down and parse the remote files
  return Promise.all(
    paths
      .filter((path) => path.endsWith(".yml") && !path.includes("/"))
      .map(async (path) => await fetchStaff(url, path, website))
  );
}

async function fetchStaff(
  baseURL: string,
  file: string,
  website: Website
): Promise<Staff> {
  const res = await fetch(baseURL + file);

  if (!res.ok) {
    throw new Error(
      `Failed to fetch staff file: ${res.status} ${res.statusText} \n ${
        baseURL + file
      }`
    );
  }

  const text = await res.text();
  const json = yaml.load(text) as Staff;

  return {
    ...json,
    ...json?.[website],
    image: baseURL + json.image,
  };
}

type Staff = StaffBase & {
  [key in Website]?: Partial<StaffBase>;
};

type Website = "htcondor" | "path" | "osg" | "chtc" | "pelican";

interface StaffBase {
  name: string;
  image: string;
  title: string;
  website?: string;
  institution?: string;
  promoted?: boolean;
  weight?: number;
  description?: string;
  organizations?: Website[];
  status: "Staff" | "Student" | "Past";
}

export async function writePelicanTeamFile() {
  let staff = await getStaffFromRepo(
    "chtc",
    "staff-list",
    "init-staff-list",
    "https://chtc.github.io/staff-list/",
    "pelican"
  );

  staff = staff.filter(
    (member) =>
      member.status !== "Past" &&
      (member.organizations ? member.organizations.includes("pelican") : false)
  );

  const staffJson = JSON.stringify(staff, null, 2);
  fs.writeFileSync(DATA_FILE, staffJson);
}
