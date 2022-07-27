import { Notyf } from "notyf";

export enum SuccessMessage {
    CAR_FOUND = "הרכב נמצא בהצלחה"
}

export enum ErrorMessage {
    CAR_NOT_FOUND = "לא נמצא רכב",
    ERROR_MESSAGE = "משהו השתבש, אנא נסו שוב"
}

class Notify {
    private notification = new Notyf({ duration: 4000, position: { x: "center", y: "top" } });

    public success(message: string) {
        this.notification.success(message);
    }

    public error(message: string) {
        this.notification.error(message);
    }

    private extractMessage(err: any): string {
        if (typeof err === "string") {
            return err;
        }
        if (typeof err?.response?.data === "string") {
            return err.response.data;
        }
        if (Array.isArray(err?.response?.data)) {
            return err.response.data[0];
        }
        if (typeof err?.message === "string") {
            return err.message;
        }
        return "משהו השתבש";
    }

}

const notify = new Notify();

export default notify;
