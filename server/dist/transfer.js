import { matchApp, superApp } from './Schema.js';
async function exportAllData() {
    return {
        matchApp: await matchApp.find({}),
        superApp: await superApp.find({}),
    };
}
async function sendExport() {
    const REMOTE_SERVER = process.env.REMOTE_SERVER_URL;
    if (!REMOTE_SERVER) {
        console.error('No remote server to send to');
        return;
    }
    return await fetch(`${REMOTE_SERVER}/data/sync`, {
        method: 'POST',
        body: JSON.stringify(await exportAllData()),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
function scheduleExport() {
    setInterval(sendExport, 60 * 1000 * 5);
}
async function importAllData(data) {
    await Promise.all([
        matchApp.deleteMany(),
        superApp.deleteMany()
    ]);
    await Promise.all([
        matchApp.insertMany(data.matchApp),
        superApp.insertMany(data.superApp),
    ]);
}
export { exportAllData, importAllData, sendExport, scheduleExport };
