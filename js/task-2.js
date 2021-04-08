const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve) => {
        allUsers.map(user => {
            if (user.name === userName && user.active !== true) {
                resolve({...user });
            }
        })

    });
};

const logger = updatedUsers => console.log(updatedUsers);

/* toggleUserState(users, 'Mango', logger);
toggleUserState(users, 'Lux', logger); */

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);

// , active: !user.active