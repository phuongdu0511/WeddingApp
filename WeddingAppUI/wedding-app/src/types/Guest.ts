export interface Guest {
  guestName: string;
  guestPath: string;
  status: boolean | null;
  vow: boolean;
  type: number;
  partner: number | null;
  donate: number;
  rowVersion: string;
  language: string;
}