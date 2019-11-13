import dayjs from "dayjs";

/* Keys returned by the gitlab api. The other keys in the array below
 * are mostly jokes. These are the keys the gitlab api query searches for.
 */
export const gitlabKeys = [
  "stargazers_count",
  "watchers_count",
  "forks",
  "open_issues_count",
  "subscribers_count",
  "pushed_at"
];

// TODO To be provided by an API
const data = [
  {
    label: "Stars this repository has on gitlab",
    key: "stargazers_count",
    value: "0",
    link: "https://gitlab.com/aranjbar/me/stargazers"
  },
  {
    label: "Number of people watching this repository",
    key: "subscribers_count",
    value: "0",
    link: "https://gitlab.com/aranjbar/me/stargazers"
  },
  {
    label: "Number of forks",
    key: "forks",
    value: "0",
    link: "https://gitlab.com/aranjbar/me/network"
  },
  {
    label: "Number of spoons",
    value: "0"
  },
  {
    label: "Number of linter warnings",
    // TODO ammend this with a pre-commit hook
    // `npm run lint | grep problems | tail -1 | awk '{print $2}'`
    value: "0"
  },
  {
    label: "Open gitlab issues",
    key: "open_issues_count",
    value: "0",
    link: "https://gitlab.com/aranjbar/me/issues"
  },
  {
    label: "Last updated at",
    key: "pushed_at",
    value: dayjs().format("MMMM D, YYYY"),
    link: "https://gitlab.com/aranjbar/me/commits"
  },
  {
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: "Lines of Javascript powering this website",
    value: "2625",
    link: "https://gitlab.com/aranjbar/me/graphs/contributors"
  }
];

export default data;
