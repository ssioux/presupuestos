import { Budget } from 'src/budgets/entities/budget.entity';
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
  @Column('text')
  lastName: string;
  //   @Column('text') // find operation concatenate
  //   name: string;
  @Column()
  phone?: string;
  @Column()
  type: string;
  @OneToMany(() => Budget, (budget) => budget.client)
  budget: Budget[];
}
