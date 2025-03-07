/**
 * CRUD LAYER - Handles HTTP requests and responses
 */

import { Request, Response, NextFunction } from 'express';
import { UserService } from '@/application/services/UserService';

export class UserController {
  constructor(private readonly userService: UserService) {}

  createUser = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
      const user = await this.userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  };

  getUser = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
      const user = await this.userService.getUserById(req.params.id);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get user' });
    }
  };

  updateUser = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
      const user = await this.userService.updateUser(req.params.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  };

  deleteUser = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
      await this.userService.deleteUser(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  };

  assignRole = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
      await this.userService.assignRole(req.params.id, req.body.roleId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to assign role' });
    }
  };

  revokeRole = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
      await this.userService.revokeRole(req.params.id, req.params.roleId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to revoke role' });
    }
  };

  getUserRoles = async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    try {
      const roles = await this.userService.getUserRoles(req.params.id);
      res.status(200).json(roles);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get user roles' });
    }
  };
}
