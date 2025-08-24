interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IsUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

const defaultValue: { users: IsUser[] } = {
    users: [],
};


export const useUsersStore = defineStore('users', {
    state: () => defaultValue,

    getters: {
        isUserName: state => state.users.map(user => user.username),
    },

    actions: {
        clear() {
            this.users = [];
        },

        set(input: IsUser[]) {
            this.users = input;
        }
    }
})