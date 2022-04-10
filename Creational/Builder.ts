// Builder is a creational design pattern that lets you construct complex objects step by step.
//The pattern allows you to produce different types and representations of an object using the same construction code.

interface Assignment {
  subject: string;
  difficulty: 'easy' | 'medium' | 'hard';
  dueDate: Date;
}

export enum AssignmentDifficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

interface AssignmentBuilderI {
  setDifficulty(difficulty: AssignmentDifficulty): this;
  setDueDate(dueDate: Date): this;
  build(): Assignment;
}

export class AssignmentBuilder implements AssignmentBuilderI {
  private _subject: string;
  private _difficulty: AssignmentDifficulty = AssignmentDifficulty.EASY;
  private _dueDate: Date = new Date();

  constructor(subject: string) {
    this._subject = subject;
  };

  public setDifficulty(difficulty: AssignmentDifficulty): this {
    this._difficulty = difficulty;
    return this;
  };

  public setDueDate(dueDate: Date): this {
    this._dueDate = dueDate;
    return this;
  };

  public build(): Assignment {
    return {
      difficulty: this._difficulty,
      dueDate: this._dueDate,
      subject: this._subject,
    };
  };
}