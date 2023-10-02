/**
 * ! Generics
 */

// > Code templates that we can define and reuse in our codebase.

// > Generics tells the function, class or interface what type to use at runtime.

// > It is a parameter passed to a type, interface or class.
// Example:
// function add(a, b) {
//   return a + b;
// }
type TList<ListData> = {
  data: ListData[];
};

// ///////////////////////////////////////////////////////////////////////////////////

// TODO: Lets make a generic fetcher function that fetches data from any api.
function fetcherWithTypes<TFetcherResponse>(
  url: string
): Promise<TFetcherResponse> {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
}

type TPost = {
  id: number;
  title: string;
};
function getPosts() {
  return fetcherWithTypes<TPost[]>(`/posts`);
}

type User = {
  id: number;
  email: string;
};
function getUsers() {
  return fetcherWithTypes<User[]>(`/posts`);
}
async function ShowData() {
  const posts = await getPosts();
  posts.map((p) => p.id);

  const users = await getUsers();
  users.map((u) => u.email);
}

// ///////////////////////////////////////////////////////////////////////////////////

// Lets make a generic list renderer component
function GenericListRenderer<T extends { id: number }>({
  renderItem,
}: {
  renderItem: (item: T) => string;
}) {
  // React code here
  // we can wrap the renderItem in a layout which will be used for all renderers.
  // <div>
  // border
  // list view
  // pagination
  // </div>
}

function PostRenderer() {
  const posts = [
    { id: 1, title: "one" },
    { id: 2, title: "two" },
  ];
  return GenericListRenderer<(typeof posts)[number]>({
    renderItem(item) {
      item.title;
      return "abc";
    },
  });
}

function UserRenderer() {
  const users = [
    { id: 1, email: "ram@test.com" },
    { id: 2, email: "shyam@test.com" },
  ];
  return GenericListRenderer<(typeof users)[number]>({
    renderItem(item) {
      item.email;
      return "abc";
    },
  });
}

export {};
