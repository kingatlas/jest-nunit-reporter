const Testresults = require('./src/Testresults');
const xml = require('xml');
const fs = require('fs');
const path = require('path');

module.exports = (results) => {
  const out = process.env.TEST_REPORT_PATH || process.cwd();
  const filename = process.env.TEST_REPORT_FILENAME || 'test-report.xml';
  const testresults = new Testresults(results);
  const data = xml(testresults, { declaration: true, indent: '  ' });
  fs.writeFileSync(path.join(out, filename), data);
  return results;
};
