import { t } from "../../trpc";
import { z } from "zod";
import * as service from "../../modules/users/service";
import { User } from "shared-ts";

export const userRouter = t.router({
  get: t.procedure.input(z.object({ userId: z.string() })).query(async ({ input }): Promise<User[]> => {
    const { userId } = input;
    const user = await service.getUser(userId);
    return user;
  }),
  update: t.procedure
    .input(
      z.object({
        userId: z.string(),
        firstName: z.string(),
        lastName: z.string(),
        preferences: z.string(),
      })
    )
    .mutation(async (req) => {
      const user = req.input as User;
      await service.updateUser(user);
    }),
  delete: t.procedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .mutation(async (req) => {
      await service.deleteUser(req.input.userId);
    }),
});
