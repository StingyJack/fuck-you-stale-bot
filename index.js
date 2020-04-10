const fetch = require('node-fetch');
const fs = require('fs-extra');

void async function () {
  const response = await fetch('https://api.github.com/users/stale[bot]/events');
  const data = await response.json();
  const readme = await fs.readFile('readme.md', { encoding: 'ascii' });
  const prefix = readme.substring(0, readme.indexOf('<!-- data -->') + '<!-- data -->\n'.length);
  const suffix = readme.substring(readme.indexOf('<!-- /data -->'));
  let content = '\n';
  for (const event of data) {
    switch (event.type) {
      case 'IssuesEvent': {
        content += `### ${event.payload.action} [an issue](${event.payload.issue.html_url}) by [${event.payload.issue.user.login}](${event.payload.issue.user.html_url}) in [${event.repo.name}](${event.repo.url})\n\n`;
        content += `[${event.payload.issue.user.login}](${event.payload.issue.user.html_url}) took time and effort to create the issue for nothing.\n\n`;
        break;
      }
      case 'PullRequestEvent': {
        content += `### ${event.payload.action} [a PR](${event.payload.pull_request.html_url}) by [${event.payload.pull_request.user.login}](${event.payload.pull_request.user.html_url}) in [${event.repo.name}](${event.repo.url})\n\n`;
        content += `[${event.payload.pull_request.user.login}](${event.payload.pull_request.user.html_url}) took time and effort to create the PR for nothing.\n\n`;
        break;
      }
    }
  }

  content += '\n';
  await fs.writeFile('readme.md', prefix + content + suffix);
}()
