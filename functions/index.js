// Correct imports for Firebase Functions & Admin SDK
import { onRequest } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import cors from "cors";

// Initialize Firebase Admin SDK
admin.initializeApp();

// Setup CORS middleware
const corsHandler = cors({ origin: true });

export const listUsers = onRequest((req, res) => {
  corsHandler(req, res, async () => {
    try {
      const listUsersResult = await admin.auth().listUsers();
      res.status(200).json(listUsersResult.users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
});
