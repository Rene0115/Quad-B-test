import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

class UserEntity {
  @PrimaryGeneratedColumn()
  id;

  @Column({ type: 'varchar' })
  base_unit;

  @Column({ type: 'varchar' })
  quote_unit;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  low;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  high;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  last;

  @Column({ type: 'varchar' })
  type;

  @Column({ type: 'bigint' })
  open;

  @Column({ type: 'decimal', precision: 12, scale: 5 })
  volume;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  sell;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  buy;

  @Column({ type: 'bigint' })
  at;

  @Column({ type: 'varchar' })
  name;
}

export default UserEntity;
