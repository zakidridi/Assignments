import { DevoirsComponent } from "./devoirs.component";

export class Devoir {
    id!: string;
    title!: string;
    remarques!: string;
    status!: string;
    note!: number;
    type!: string;
    assignment!: string;
    user!: string;
}
