export class Database {
  private static instance: Database;

  // constructor should be private to prevent call for object with new keyword
  private constructor() {};

  public static getInstance(): Database {
    if (!Database.instance) {
        Database.instance = new Database();
    }

    return Database.instance;
  };

  public query(sql: string): string {
    return `return result for query ${sql}`;
  }
}
