import { routes as homeRoutes } from "./modules/home/routing";
import { routes as XEPPTRoutes } from "./modules/XEPPTCard/routing";
import { routes as StatementsRoutes } from "./modules/statements/routing";

export const routes = [...homeRoutes, ...XEPPTRoutes, ...StatementsRoutes];
