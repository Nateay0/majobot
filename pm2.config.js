module.exports = {
 apps: [
  {
   name: "Majo.exe - Bot",
   script: "./index.js",
   watch: true,
   node_args: "--trace-deprecation",
   exec_mode: "cluster",
   ignore_watch: ["[/\\]./", "node_modules", "database", "cache", "^.", "^[.]"],
   watch_options: {
    followSymlinks: false,
   },
   args: ["--color"],
  },
  {
   name: "Majo.exe - Dashboard",
   script: "./dashboard/dashboard.js",
   watch: true,
   node_args: "--trace-deprecation",
   exec_mode: "cluster",
   ignore_watch: ["[/\\]./", "node_modules", "database", "cache", "^.", "^[.]"],
   watch_options: {
    followSymlinks: false,
   },
   args: ["--color"],
  },
 ],
};
