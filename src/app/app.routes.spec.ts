import { routes } from "./app.routes";
import { UsersComponent } from "./users/users.component";

describe('routes', () => {
    it('should contain a route for /users', () => {
        const path = { path: 'users', component: UsersComponent };
        expect(routes).toContain(path);
    });
});