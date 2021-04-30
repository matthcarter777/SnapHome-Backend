import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

import { User } from './User';

@Entity("propertys")
class Property {
  
  @PrimaryColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}
 export { Property };
