import sgMail = require('@sendgrid/mail');
import {config} from 'dotenv';

config();

interface IMessage {
    to: string
    from: string
    subject: string
    text: string
}

export const sendMail = async (message: IMessage) => {
    // @ts-ignore
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    try {
        return await sgMail.send(message)
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.log(error.response.body)
        }
        return error
    }
};
