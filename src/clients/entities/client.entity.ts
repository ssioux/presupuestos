import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {
    default: '',
  })
  description?: string;

  @Column()
  email?: string;

  @Column()
  firstName?: string;
  @Column()
  lastName: string;
  //   @Column('text') // find operation concatenate
  //   name: string;
  @Column()
  phone?: number;
  @Column()
  type: string;
  // @OneToMany(() => Budget, (budget) => budget.client)
  // budget: Budget[];
}
