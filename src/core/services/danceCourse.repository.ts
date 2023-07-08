import { ApiAnswer } from "../../features/types/api.response";
import { DanceCourse } from "../../features/models/danceCourse";

export class DanceCourseRepository {
  constructor(public url: string, public token: string) {}

  async query(): Promise<DanceCourse[]> {
    const response = await fetch(this.url);

    if (!response.ok) {
      const message = `Error: ${response.status}; ${response.statusText}`;
      throw new Error(message);
    }

    const answer = (await response.json()) as ApiAnswer;
    return answer.items;
  }

  async create(item: FormData): Promise<DanceCourse> {
    const response = await fetch(this.url + "/", {
      method: "POST",
      body: item,
      // headers: { Authorization: "Bearer" + this.token },
    });

    return response.json() as Promise<DanceCourse>;
  }
}
