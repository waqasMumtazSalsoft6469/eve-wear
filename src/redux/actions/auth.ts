import { secureStorage } from "@/utils/secureStorage";
import { changeFirstTime, clearData, saveAuthToken, saveUserData } from "../reducers/auth";
import store from "../store";

const { dispatch } = store;

export const changeFirstTimeState = (isFirstTime: boolean) => {
    secureStorage.setItem("IS_FIRST_TIME", isFirstTime.toString()).then(() => {
        dispatch(changeFirstTime(isFirstTime))
    })
};

export const loginAction = (userData: any, accessToken?: string) => {
    // Use the passed token, or fall back to token in userData, or a static default
    const token = accessToken || userData?.token || "static_token_12345";

    secureStorage.setItem("USER_DATA", JSON.stringify(userData));
    secureStorage.setItem("AUTH_TOKEN", token);
    secureStorage.setItem("IS_FIRST_TIME", "true");

    dispatch(saveUserData(userData));
    dispatch(saveAuthToken(token));
    dispatch(changeFirstTime(true));
};

export const clearDataAction = () => {
    secureStorage.clearAll();
    dispatch(clearData());
}