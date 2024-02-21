import { Section } from 'src/sections/entities/section.entity';
import {
  BeforeInsert,
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Work {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {
    unique: true,
  })
  name: string;

  @Column('text', {
    default: '',
  })
  description?: string;

  @Column('text', {
    default: '',
  })
  newField?: string;

  @Column('decimal', { scale: 2 })
  price1: number;

  @Column('decimal', {
    default: 0,
    scale: 2,
  })
  price2?: number;

  @Column('decimal', {
    default: 0,
    scale: 2,
  })
  price3?: number;

  @Column('decimal', {
    default: 0,
    scale: 2,
  })
  price4?: number;

  @Column('decimal', {
    default: 0,
    scale: 2,
  })
  priceGapMod?: number;

  @ManyToOne(() => Section, (section) => section.id, {
    cascade: true,
    eager: true,
  })
  section: Section;

  @DeleteDateColumn() // for softdelete
  deleteAt: Date;

  @BeforeInsert()
  sumPrices() {
    if (this.price2 > 0) {
      this.price2 = this.price2 + this.price1;
    }
    if (this.price3 > 0) {
      this.price3 = this.price3 + this.price2;
    }
    if (this.price4 > 0) {
      this.price4 = this.price4 + this.price3;
    }
  }
}
