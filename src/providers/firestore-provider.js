import { makeProvider } from "react-provider-maker";
import firebase from "../firebase";
const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true,
});
function useFirestoreHook() {
  return db;
}

export const {
  Provider: FirestoreProvider,
  useProvider: useFirestore,
} = makeProvider(useFirestoreHook);
