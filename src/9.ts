/**
 * ! Typescript Utilities
 */

// > types provided by typescript to perform transformations.

// Examples:

type Post = {
  id: number;
  title: string;
  content: string;
  authors: string[];
  status: PostStatus;
};
type PostStatus = "published" | "unpublished" | "in_review";

// # Partial
function ShowPartialPost(data: Partial<Post>) {
  // data.
  // data
}

// # Pick
function ShowPostTitle(post: Pick<Post, "title">) {
  post.title;
}

// # Omit
function ShowPostItem(post: Omit<Post, "content">) {
  // post.authors
}

// # Exclude
function ShowPublishedPost(
  status: Exclude<PostStatus, "unpublished" | "in_review">
) {
  // status
}

// # ReturnType
async function getPosts(): Promise<Post[]> {
  return fetch(`/posts`)
    .then((res) => res.json())
    .then((data) => data);
}

const postsPromise: ReturnType<typeof getPosts> = [];

// # Awaited
const posts: Awaited<ReturnType<typeof getPosts>> = [
  {
    id: 1,
    title: "abc",
    authors: ["ram"],
    content: "fkjahkfah",
    status: "in_review",
  },
];

export {};
