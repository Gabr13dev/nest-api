import { PrimaryGeneratedColumn, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
    @PrimaryColumn({ type: 'integer' })
    id_user: number;

    @Column({ type: 'varchar', length: 100 })
    fullname_user: string;

    @Column({ type: 'varchar', length: 150 })
    email_user: string;

    @Column({ type: 'varchar', length: 200 })
    password_user: string;

    @Column({ type: 'varchar', length: 300 })
    avatarurl_user: string;

    @Column({ type: 'boolean', default: true })
    firsttime_user: boolean;

    @Column({ type: 'boolean', default: false })
    isactive_user: boolean;
}