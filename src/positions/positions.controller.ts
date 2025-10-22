import { Controller, Get, Post, Put, Delete, Body, Param,Req, UseGuards} from '@nestjs/common';
import { PositionsService } from './positions.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from 'express';
@Controller('positions')
export class PositionsController {
  constructor(private positionsService: PositionsService) {}

  // GET all positions (protected)
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll() {
    return this.positionsService.getAll();
  }

  // GET single position by ID (protected)
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.positionsService.findById(+id);
  }

  // CREATE a new position (protected)
  // The user id will come from JWT (req.user.userId)
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() body: { position_code: string; position_name: string }, @Req() req:Request) {
    const userId = (req.user as any).userId; // Automatically set from token
    return this.positionsService.createPosition(body.position_code, body.position_name, userId);
  }

  // UPDATE position (protected)
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    return this.positionsService.updatePosition(+id, body);
  }

  // DELETE position (protected)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.positionsService.deletePosition(+id);
  }
}
