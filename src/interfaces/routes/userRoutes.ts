import { Router } from 'express';
import { UserService } from '@/application/services/UserService';
import { FirebaseUserRepository } from '@/infrastructure/repositories/FirebaseUserRepository';
import { validateRequest } from '@/interfaces/middlewares/validateRequest';
import {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
  deleteUserSchema,
  assignRoleSchema,
  revokeRoleSchema,
  getUserRolesSchema,
} from '@/interfaces/validators/userSchemas';
import { firebaseApp } from '@/infrastructure/db/firebaseClient'; // You'll need to create this
import { UserController } from '@/interfaces/controllers/UserController';

export const createUserRouter = () => {
  const router = Router();

  // Initialize dependencies
  const userRepository = new FirebaseUserRepository(firebaseApp);
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);

  // Create user
  router.post('/users', validateRequest(createUserSchema), userController.createUser);

  // Get user by id
  router.get('/users/:id', validateRequest(getUserSchema), userController.getUser);

  // Update user
  router.put('/users/:id', validateRequest(updateUserSchema), userController.updateUser);

  // Delete user
  router.delete('/users/:id', validateRequest(deleteUserSchema), userController.deleteUser);

  // Assign role to user
  router.post('/users/:id/roles', validateRequest(assignRoleSchema), userController.assignRole);

  // Revoke role from user
  router.delete(
    '/users/:id/roles/:roleId',
    validateRequest(revokeRoleSchema),
    userController.revokeRole
  );

  // Get user roles
  router.get('/users/:id/roles', validateRequest(getUserRolesSchema), userController.getUserRoles);

  return router;
};
