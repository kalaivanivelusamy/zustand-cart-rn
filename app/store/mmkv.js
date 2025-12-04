import { createMMKV } from "react-native-mmkv";

export const storage =  createMMKV({
    id: 'cart-Storage',
}
);

export const zustandStorage = {
    getItem: (name) => {
        return storage.getString(name) || null;
    },
    setItem: (name, value) => {
        storage.set(name, value);
    },
    removeItem: (name) => {
        storage.delete(name);
    }
}

