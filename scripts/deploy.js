// Inspired by https://blog.logrocket.com/automatically-build-deploy-vuejs-app-github-pages/
import { execa } from "execa";
import fs from "fs";

/* eslint-disable no-console */
(async () => {
  try {
    console.log("Starting deploy script...");

    /* First, check git status for uncommitted changes */
    const { stdout } = await execa("git", ["status", "--porcelain"]);
    if (stdout) {
      throw new Error(
        "You have unstaged or uncommitted changes. Please commit or stash them before deploying."
      );
    }

    /* Check out the gh-pages branch */
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    // eslint-disable-next-line no-console
    
    /* Build */
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    
    /* Understand if it's dist or build folder */
    const folderName = fs.existsSync("dist") ? "dist" : "build";

    /* Make the gh-pages branch */
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    
    /* Push to gh-pages */
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    
    /* Get current os to get the right rm command, and remove folderName */
    const isWindows = process.platform === "win32";
    if (isWindows) {
      await execa('cmd', ['/C', 'rd', '/s', '/q', folderName]);
    } else {
      await execa('rm', ['-r', folderName]);
    }

    /* Reset to master and delete the local gh-pages branch */
    await execa("git", ["checkout", "-f", "master"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();