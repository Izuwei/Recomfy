import * as SecureStore from "expo-secure-store";
import {v4 as uuidv4} from "uuid";

export const getUuid =  async () => {
    let uniqueId = await SecureStore.getItemAsync('secure_deviceid');
    if (uniqueId) {
        //ok
    } else {
        let uuid = uuidv4();
        await SecureStore.setItemAsync('secure_deviceid', JSON.stringify(uuid));
        uniqueId = uuid;
    }
    return uniqueId.slice(1, -1);
};


