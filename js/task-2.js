const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            allUsers.map(user => {
                if (user.name === userName) {
                    resolve({...user })
                }
            })
        })
    })
};

const logger = updatedUsers => console.table(updatedUsers);

/* toggleUserState(users, 'Mango', logger);
toggleUserState(users, 'Lux', logger); */

toggleUserState(users, 'Ajax').then(logger);
toggleUserState(users, 'Poly').then(logger);

// , active: !user.active