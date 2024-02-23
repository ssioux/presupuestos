import { Client } from 'src/clients/entities/client.entity';
import { Work } from 'src/works/entities/work.entity';
import { Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export class Budget {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {
    default: '',
  })
  description?: string;
  @Column('decimal', {
    default: 0,
    scale: 2,
  })
  bulletinE12V?: number;
  @Column('decimal', {
    default: 0,
    scale: 2,
  })
  bulletinE230V?: number;
  @Column('decimal', {
    default: 0,
    scale: 2,
  })
  bulletinG?: number;
  @Column('decimal', {
    default: 0,
    scale: 2,
  })
  certificate?: number;
  @ManyToOne(() => Client, (client) => client.id, {
    cascade: true,
    eager: true,
  })
  client: Client;
  @Column('int')
  user: number;
  @Column()
  vehicle: string;
  @OneToMany(() => Work, (work) => work.name)
  works: Work[];
}
