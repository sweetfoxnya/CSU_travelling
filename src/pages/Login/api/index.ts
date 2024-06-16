import {LoginType} from "@features/auth";
import {instance} from "@shared/libs";

export const login = (data: LoginType) => {
  return instance.post('/signin?client_id=Rh4ZomeoWHFJus8KbspWqJTtXHcMGkLHAZ30qgCD3RK3rTHJ', data);
}
