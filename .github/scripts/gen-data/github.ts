interface GitTreeItem {
  path: string;
  mode: string;
  type: string;
  sha: string;
  size: number;
  url: string;
}

interface GitTree {
  sha: string;
  url: string;
  tree: GitTreeItem[];
}

export async function getTree(
  organization: string,
  repo: string,
  branch: string
): Promise<GitTree> {
  const url = `https://api.github.com/repos/${organization}/${repo}/git/trees/${branch}?recursive=1`;
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

export function getPaths(tree: GitTree): string[] {
  return tree.tree.map((item) => item["path"]);
}

export async function getRawFile(
  organization: string,
  repo: string,
  path: string,
  branch: string
): Promise<string> {
  const url = new URL(
    `https://raw.githubusercontent.com/${organization}/${repo}/${branch}/${path}`
  );

  const res = await fetch(url, {
    headers: { Accept: "application/vnd.github.raw" },
  });

  return await res.text();
}
