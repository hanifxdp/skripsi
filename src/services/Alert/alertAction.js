import { ALERT_SUCCESS, ALERT_FAILED } from "./alertTypes";

export const alertSuccess = (message) => ({
	type: ALERT_SUCCESS,
	payload: message,
});

export const alertFailed = (message) => ({
	type: ALERT_FAILED,
	payload: message,
});
