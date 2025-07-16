import { Client, Account, Databases, Storage} from 'appwrite';

export const client = new Client();

const config = useRuntimeConfig()

console.log('Appwrite Config:', config.public)

const appWriteID: string = config.public.appwriteProjectId
const appWriteUrl: string = config.public.appwriteEndpoint


client
    .setEndpoint(appWriteUrl)
    .setProject(appWriteID);

export const account = new Account(client);
export { ID } from 'appwrite';
export const DB = new Databases(client)
export const storage = new Storage(client)
