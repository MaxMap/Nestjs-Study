import { SetMetadata } from '@nestjs/common';
import { Role } from './role';

export const Roles = (...roles: Role[]) => {
  console.log('自定义装饰器 SetMetadata');

  return SetMetadata('role', roles);
};
