const path = require("path");

const serverPath = (staticFilePath) => {
    // return path.join(getConfig().serverRuntimeConfig.PROJECT_ROOT, staticFilePath)
    return path.resolve(process.cwd(), staticFilePath);
}

export default serverPath;



