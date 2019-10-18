import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
import { Guild } from './guild.entity';
import { Characters } from './characters.entity';

@Entity({ synchronize: false })
export class GuildMember extends BaseEntity
{
    @Column()
    guildid: number;

    @PrimaryGeneratedColumn()
    guid: number;

    @Column()
    rank: number;

    @Column()
    pnote: string;

    @Column()
    offnote: string;
}
