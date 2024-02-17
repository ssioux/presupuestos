import { Work } from 'src/works/entities/work.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

  @OneToMany(() => Work, (work) => work.section)
  works: Work[];
}
