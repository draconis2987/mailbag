import axios, { AxiosResponse } from "axios";
import { config } from "./config";


export interface IMailbox { name: string, path: string }


// Define interface to describe a received message.
export interface IMessage {
  id: string,
  date: string,
  from: string,
  subject: string,
  body?: string
}


// The worker that will perform IMAP operations.
export class Worker {


  /**
   * Returns a list of all (top-level) mailboxes.
   */
  public async listMailboxes(): Promise<IMailbox[]> {

    console.log("IMAP.Worker.listMailboxes()");

    const response: AxiosResponse = await axios.get(`${config.serverAddress}/mailboxes`);
    return response.data;

  } /* End listMailboxes(). */


  /**
   * Returns a list of messages in a named mailbox
   */
  public async listMessages(inMailbox: string): Promise<IMessage[]> {

    console.log("IMAP.Worker.listMessages()");

    const response: AxiosResponse = await axios.get(`${config.serverAddress}/mailboxes/${inMailbox}`);
    return response.data;

  } /* End listMessages(). */


  /**
   * Returns the body of a specified message.
   */
  public async getMessageBody(inID: string, inMailbox: String): Promise<string> {

    console.log("IMAP.Worker.getMessageBody()", inID);

    const response: AxiosResponse = await axios.get(`${config.serverAddress}/messages/${inMailbox}/${inID}`);
    return response.data;

  } /* End getMessageBody(). */


  /**
   * Returns the body of a specified message.
   */
  public async deleteMessage(inID: string, inMailbox: String): Promise<void> {

    console.log("IMAP.Worker.getMessageBody()", inID);

    await axios.delete(`${config.serverAddress}/messages/${inMailbox}/${inID}`);

  } /* End deleteMessage(). */


} 