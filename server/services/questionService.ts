import {questionsDB} from "../questionsInMemoryDB";

export async function getQuestionService(id: string){
    return questionsDB.get(id);
}
