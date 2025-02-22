const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.sendMessage = functions.https.onCall(async (data, context) => {
    const message = {
        token: data.token, // Receiver's FCM token
        notification: {
            title: "New Message",
            body: data.message,
        },
    };

    try {
        await admin.messaging().send(message);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
});
