import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Listing} from "../listings/listing.entity";

@Entity({ name: 'realtors' })
export class Realtor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    phone: string;

    @Column({ nullable: true })
    avatar: string;

    @OneToMany(type => Listing, listing => listing.realtor)
    listings: Listing[];

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: Date;
}