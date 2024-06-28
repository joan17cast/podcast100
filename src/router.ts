import Home from "@/pages/home";
import NotFound from "@/pages/notFound";
import Podcast from "@/pages/podcast";
import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute();

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const podcastRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/podcast/$podcastId",
  component: Podcast,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "$",
  component: NotFound,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  podcastRoute,
  notFoundRoute,
]);

export const router = createRouter({ routeTree });
