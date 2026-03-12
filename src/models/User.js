// User model

class User {
  constructor(id, email, name, role = 'user') {
    this.id = id;
    this.email = email;
    this.name = name;
    this.role = role;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  static async findById(id) {
    // Database query logic placeholder
    return null;
  }

  static async findByEmail(email) {
    // Database query logic placeholder
    return null;
  }

  async save() {
    // Save to database logic placeholder
    this.updatedAt = new Date();
    return this;
  }

  toJSON() {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      role: this.role,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

module.exports = User;