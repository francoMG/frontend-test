export const getReports = async () => {
  const reportResponse = await fetch('/api/reports')
  let { reports } = await reportResponse.json()

  reports = reports.map(({ category, total }) => ({
    tag: category,
    value: total,
  }))

  return reports
}
