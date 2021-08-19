import Dexie from "dexie";
import { accDetailsStatus, onAccountsFetched } from "../actions/AccountStatementAction";
import store from '../store'
import Config from "./Config";
import PromisifyFileReader from 'promisify-file-reader';

const db = new Dexie('AccountNumbersDatabase');
db.version(1).stores({
       accountDetails: 'No, Mchn, EnNo, Name, Mode, IoMd, DateTime',
});

export default class AccountNumbersUtils {
    static parseFile = async (FileObject) => {
        store.dispatch(accDetailsStatus({ type: Config.ACCOUNT_DETAILS_COPY_STARTING }));
        let lines = (await PromisifyFileReader.readAsText(FileObject)).split("\n");
        let accounts = [];
        AccountNumbersUtils.initDB().clear();
        for (let i = 1; i < lines.length; i++) {
            let line = lines[i];
            try {
                let account = await AccountNumbersUtils.saveLineToStorageUtils(line);
                if (account)
                    accounts.push(account);
            } catch (err) {
                store.dispatch(accDetailsStatus({ type: Config.ACCOUNT_DETAILS_COPY_ERROR, err }));
                throw err;
            }
        }
        console.log("in parseFile, the object saved is \n\n" + JSON.stringify(accounts));
        store.dispatch(onAccountsFetched(accounts));

    }

    static saveLineToStorageUtils = async (line) => {
        if (!line || !line.trim()) return;
        let lineParts = line.split("\t").map(linePart => linePart.trim());
        let objectToStore = {
            No: lineParts[0],
            Mchn: lineParts[1],
            EnNo: lineParts[2],
            Name: lineParts[3],
            Mode: lineParts[4],
            IoMd: lineParts[5],
            DateTime: lineParts[6]
        };
        console.log("in AccountNumbersUtils.saveLineToStorageUtils, about to save: \n\n" + JSON.stringify(objectToStore));
        await AccountNumbersUtils.initDB().add(objectToStore);
        return objectToStore;
    };

    static initDB = () => {
        return db.accountDetails;
    };

    static getAccountDetails = async (fileId) => await AccountNumbersUtils.initDB().where("fileId").equals(fileId).toArray();

    static getAllAccountDetails = async () => {
        let accounts = (await AccountNumbersUtils.initDB().toArray());
        return accounts;
    };
}