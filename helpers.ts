export default {
    logCyan(what: any) {
        console.log("\x1b[36m%s\x1b[0m", what);
    },
    logYellow(what: any) {
        console.log("\x1b[33m%s\x1b[0m", what);
    }
};
