// Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.

// Facade
export class WalletFacade {
  private _account: Account;
  private _securityCode: SecurityCode;
  private _wallet: Wallet;
  private _ledger: Ledger;

  constructor(accountId: string, code: number) {
    this._account = new Account(accountId);
    this._securityCode = new SecurityCode(code);
    this._wallet = new Wallet();
    this._ledger = new Ledger();
  };

  public addMoneyToWallet(accountId: string, code: number, amount: number): void {
    if (!this._account.isAccountValid(accountId)) {
      throw new Error('account id invalid');
    };

    if (!this._securityCode.checkSecurityCode(code)) {
      throw new Error('account code invalid')
    };

    this._wallet.creditBalance(amount);
    this._ledger.makeEntry(accountId, amount);
    console.log('money added succesfully');
  };
}

// Library code
class Account {
  private _accountId: string;

  constructor(accountId: string) {
    this._accountId = accountId;
  };

  public isAccountValid(accountId: string): boolean {
    return this._accountId === accountId
  };
}

class Wallet {
  private _amount: number;

  constructor() {
    this._amount = 0;
  }

  public creditBalance(amount: number) {
    this._amount += amount;
  };
}

class SecurityCode {
  private _code: number;

  constructor(code: number) {
    this._code = code;
  };

  public checkSecurityCode(code: number): boolean {
    return this._code === code;
  };
}

interface Entry {
  accountId: string;
  amount: number;
}

class Ledger {
  private _entries: Entry[];

  constructor() {
    this._entries = [];
  }

  public makeEntry(accountId: string, amount: number) {
    this._entries.push({ accountId, amount });
  };
}