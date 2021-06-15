import { container } from 'tsyringe';

import '@shared/infra/database/redis';

import { UserRepository } from '@modules/users/repositories/implementations/UserRepository';
import { IUserRepository } from '@modules/users/repositories/IUserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
