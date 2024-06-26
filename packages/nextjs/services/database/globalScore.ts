import { addDocumentToCollection } from "./collections";
import { getFirestoreConnector } from "./firestoreDB";
import { GlobalScoreDay } from "./schema";

const firestoreDB = getFirestoreConnector();
const collectionName = "globalScore";
const globalScoreDoc = (id: string) => firestoreDB.collection(collectionName).doc(id);
const globalScoreDocs = () => firestoreDB.collection(collectionName);

const globalScoreFilteredByDate = (date: string) =>
  firestoreDB.collection(collectionName).where("__name__", ">=", date);
const globalScoreFiltered = (date: [string, string]) =>
  globalScoreFilteredByDate(date[0]).where("__name__", "<=", date[1]);

export const getGlobalScoreFilteredDate = (date: string) => globalScoreFilteredByDate(date).get();
export const getGlobalScoreFiltered = (dates: [string, string]) => globalScoreFiltered(dates).get();
export const getGlobalScoreDocs = () => globalScoreDocs().get();
export const getGlobalScoreById = (id: string) => globalScoreDoc(id).get();
export const addGlobalScoreDoc = (project: GlobalScoreDay) => addDocumentToCollection(collectionName, project);
