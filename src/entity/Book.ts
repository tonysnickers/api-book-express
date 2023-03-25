import EntitySchema, { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  title: string | undefined;
}



