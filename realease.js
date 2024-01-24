const fse = require("fs-extra");

const copyTask = [
    ["./public", "./.next/standalone/public"],
    ["./.next/static", "./.next/standalone/.next/static"],
];

copyTask.forEach(async (e) => {
    console.log(`Copying ${e[0]} -> ${e[1]}`);
    try {
        fse.copySync(e[0], e[1], {
            overwrite: true,
        });
        console.log(`Copied ${e[0]} -> ${e[1]}`);
    } catch (err) {
        console.error(err);
    }
});

let appname = __dirname.split("\\");
appname = appname[appname.length - 1];