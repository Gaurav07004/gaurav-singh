const splitPeriod = (period) => period.split(/\s[–-]\s/);

// Group roles that share a company into a single entry.
// Roles keep the order of the data file (latest first).
export const groupByCompany = (experience) =>
  Object.values(
    experience.reduce((groups, job) => {
      if (!groups[job.company]) {
        groups[job.company] = {
          company: job.company,
          location: job.location,
          workMode: job.workMode,
          roles: [],
        };
      }
      groups[job.company].roles.push(job);
      return groups;
    }, {}),
  );

// Overall duration at the company: earliest start to latest end.
export const getCompanyPeriod = (roles) => {
  const start = splitPeriod(roles[roles.length - 1].employmentPeriod)[0];
  const end = splitPeriod(roles[0].employmentPeriod)[1];
  return `${start} – ${end}`;
};
