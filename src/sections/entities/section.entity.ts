import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Section {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text', {
    default: '',
  })
  description: string;

  @Column()
  vehicle: string;
}
