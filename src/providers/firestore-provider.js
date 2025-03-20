import { makeProvider } from "react-provider-maker";
import {firestore} from "../firebase";
const db = firestore;

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
