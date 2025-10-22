import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { RowDataPacket, OkPacket } from 'mysql2';

@Injectable()
export class PositionsService {
  constructor(private db: DatabaseService) {}
  private pool = () => this.db.getPool();

  async createPosition(position_code: string, position_name: string, userId: number) {
    const [result] = await this.pool().execute<OkPacket>(
      'INSERT INTO positions (position_code, position_name, id) VALUES (?, ?, ?)',
      [position_code, position_name, userId],
    );
    return { position_id: result.insertId, position_code, position_name, userId };
  }

  async findById(position_id: number) {
    const [rows] = await this.pool().execute<RowDataPacket[]>(
      `SELECT p.position_id, p.position_code, p.position_name, p.id AS user_id, 
              u.username, u.role, p.created_at, p.updated_at 
       FROM positions p 
       JOIN users u ON p.id = u.id 
       WHERE p.position_id = ?`,
      [position_id],
    );
    if (!rows.length) throw new NotFoundException('Position not found');
    return rows[0];
  }

  async getAll() {
    const [rows] = await this.pool().execute<RowDataPacket[]>(
      `SELECT p.position_id, p.position_code, p.position_name, p.id AS user_id, 
              u.username, p.created_at, p.updated_at 
       FROM positions p 
       JOIN users u ON p.id = u.id`,
    );
    return rows;
  }

  async updatePosition(position_id: number, partial: { position_code?: string; position_name?: string }) {
    const fields: string[] = [];
    const values: any[] = [];

    if (partial.position_code) {
      fields.push('position_code = ?');
      values.push(partial.position_code);
    }

    if (partial.position_name) {
      fields.push('position_name = ?');
      values.push(partial.position_name);
    }

    if (fields.length === 0) return this.findById(position_id);

    values.push(position_id);
    const sql = `UPDATE positions SET ${fields.join(', ')} WHERE position_id = ?`;
    await this.pool().execute(sql, values);
    return this.findById(position_id);
  }

  async deletePosition(position_id: number) {
    const [res] = await this.pool().execute<OkPacket>(
      'DELETE FROM positions WHERE position_id = ?',
      [position_id],
    );
    return res.affectedRows > 0;
  }
}
