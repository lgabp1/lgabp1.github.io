// Inspired by https://blog.logrocket.com/automatically-build-deploy-vuejs-app-github-pages/
import { execa } from "execa";
import fs from "fs";

/* eslint-disable no-console */
(async () => {
  try {
    console.log("Starting deploy script...");

    /* First, check git status for uncommitted changes */
    const { stdout } = await execa("git", ["status", "--porcelain"], { stdio: 'pipe' });
    if (stdout) {
      throw new Error(
        "You have unstaged or uncommitted changes. Please commit or stash them before deploying."
      );
    }

    /* Check out the gh-pages branch */
    await execa("git", ["checkout", "--orphan", "gh-pages"], { stdio: "inherit" });
    // eslint-disable-next-line no-console
    
    /* Build */
    console.log("Building started...");
    // Stream build output to your terminal
    await execa("npm", ["run", "build"], { stdio: "inherit" });
    
    /* Understand if it's dist or build folder */
    const folderName = fs.existsSync("dist") ? "dist" : "build";

    /* Make the gh-pages branch */
    await execa("git", ["--work-tree", folderName, "add", "--all"], { stdio: "inherit" });
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"], { stdio: "inherit" });
    
    /* Push to gh-pages */
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"], { stdio: "inherit" });
    
    /* Get current os to get the right rm command, and remove folderName */
    const isWindows = process.platform === "win32";
    if (isWindows) {
      await execa('cmd', ['/C', 'rd', '/s', '/q', folderName]);
    } else {
      await execa('rm', ['-r', folderName]);
    }

    /* Reset to master and delete the local gh-pages branch */
    await execa("git", ["checkout", "-f", "master"], { stdio: "inherit" });
    await execa("git", ["branch", "-D", "gh-pages"], { stdio: "inherit" });
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();