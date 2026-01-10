import type { JournalProps } from "./journalProps";

export interface JournalResponse {
  journals: JournalProps[];
  totalPages: number;
}
