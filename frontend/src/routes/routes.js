const API = import.meta.env.VITE_API_URL;

export const routes = {
  home: "/",
  posts: {
    create: "/posts/create",
    edit: "/posts/:id/edit",
  },
  auth: {
    login: "/login",
    register: "/register",
  },
  api: {
    auth: {
      login: API + "/oauth/login",
      register: API + "/oauth/register",
      logout: API + "/oauth/logout",
    },
    posts: {
      index: API + "/posts",
      store: API + "/posts",
      delete: API + "/posts/:id",
      show: API + "/posts/:id",
      update: API + "/posts/:id",
    },
  },
};

export function url(path, args = {}) {
  const url = path.split("/");

  for (const urlKey in url) {
    for (const argsKey in args) {
      if (`:${argsKey}` === url[urlKey]) url[urlKey] = args[argsKey];
    }
  }

  return Object.keys(url)
    .map((key) => url[key])
    .join("/");
}
