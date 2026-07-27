export interface AgendaItem {
  time: string;
  title: string;
  speaker?: string;
  description?: string;
}

export interface Agenda {
  _id: string;
  enabled: boolean;
  eyebrow?: string;
  title: string;
  description?: string;
  items: AgendaItem[];
}