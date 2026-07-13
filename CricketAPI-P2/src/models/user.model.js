const bcrypt = require('bcrypt');

// In-memory array for users
const users = [];

// Seed initial users
const seedUsers = async () => {
  try {
    const password = await bcrypt.hash('Cricket123', 10);
    users.push(
      { id: 1, name: 'Taha Nawab', email: 'taha@cricket.com', password },
      { id: 2, name: 'Babar Azam', email: 'babar@cricket.com', password },
      { id: 3, name: 'Shaheen Afridi', email: 'shaheen@cricket.com', password }
    );
    console.log('Seed users loaded.');
  } catch (err) {
    console.error('Error seeding users:', err);
  }
};

seedUsers();

module.exports = { users };
