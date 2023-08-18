import type { DaysFilters } from "src/stores/daysFilters";
import { client } from "./client";

interface Weather {
  weather: string;
}

export interface DayOfAdventure {
  _id: string;
  weather: { pm: Weather; am: Weather };
  encounters: {
    morning: number | null;
    day: number | null;
    evening: number | null;
  };
  dayNum: number;
  notes?: string;
}

class DaysService {
  private readonly prefix: string;

  constructor() {
    this.prefix = "/days";
  }

  async getDays(filters?: DaysFilters) {
    const { data } = await client.get<DayOfAdventure[]>(this.prefix, {
      params: {
        ...filters,
      },
    });
    return data;
  }

  async addDay(dayNum: number) {
    const { data } = await client.post<DayOfAdventure>(this.prefix, {
      dayNum,
    });
    return data;
  }

  async getDay(id: string) {
    const { data } = await client.get<DayOfAdventure>(`${this.prefix}/${id}`);
    return data;
  }

  async addNotesToDay(id: string, notes: string) {
    const { data } = await client.post<DayOfAdventure>(`${this.prefix}/${id}`, {
      notes,
    });
    return data;
  }
}

export default new DaysService();
