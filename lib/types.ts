// Types de questions

export type QCM = { kind: 'qcm'; question: string; choices: string[]; answer: number; explain: string; sub?: string };
export type VF = { kind: 'vf'; statement: string; answer: boolean; explain: string; sub?: string };
export type FC = { kind: 'flashcard'; front: string; back: string; sub?: string };
export type ASSOC = { kind: 'assoc'; prompt: string; pairs: [string, string][]; sub?: string };
export type Question = QCM | VF | FC | ASSOC;
