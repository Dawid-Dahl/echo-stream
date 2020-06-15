export const restartServer = () => {
	setTimeout(() => {
		process.on("exit", () => {
			console.log("Restarting process!");
			require("child_process").spawn(process.argv.shift(), process.argv, {
				cwd: process.cwd(),
				detached: true,
				stdio: "inherit",
			});
		});
		process.exit();
	}, 1000);
};
