const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const msgPath = path.join(process.cwd(), '/.git/COMMIT_EDITMSG');

const msg = fs.readFileSync(msgPath, 'utf-8').trim();

const commitRegex = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|release)(\(.+\))?: .{1,50}/;

console.log();
console.log(chalk.blue('Start verifying commit message...'));
console.log();

if (!commitRegex.test(msg)) {
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      `invalid commit message format.`,
    )}\n\n` +
      chalk.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`,
      ) +
      `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
      `    ${chalk.green(
        `fix(v-model): handle events on blur (close #28)`,
      )}\n\n` +
      chalk.red(
        `  See https://github.com/PROJECT_PATH#contributing for more details.\n`,
      ),
  );
  process.exit(1);
}
console.log(chalk.green('Verify commit message successfully!'));
console.log();
