/**
 * ! `unknown` vs `any` vs `never`
 */

// > unknown:
//   - set of all types
//   - all types can be assigned

// > any:
//   - any thing can be assigned
//   - type checking is disabled

// > never:
//   - empty set
//   - no type can be assigned to it.

// # Example: Usage of never
// Lets implement a feature in which if a api fails to resolve data in 5 seconds,
// we throw `time out` error

type Post = {
  id: number;
  title: string;
};

function timeout(ms: number): Promise<never> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({
        error: "Time out fetching api...",
      });
    }, ms);
  });
}

function getPosts(): Promise<Post[]> {
  return fetch(`/posts`)
    .then((res) => res.json())
    .then((d) => d);
}

function fetcherWithTimeout() {
  return Promise.race([timeout(5), getPosts()]);
}

async function data() {
  const posts = await fetcherWithTimeout();
  console.log(posts.map((post) => post.id));
}

// Example: Usage of unknown
// Lets implement a printer, that takes data and prints string
function printer(data: unknown): string {
  if (Array.isArray(data)) {
    return data.join(" ");
  }
  if (typeof data === "boolean") {
    return data ? "true" : "false";
  }
}
if (typeof data === "boolean") {
}
if (typeof data === "object") {
}

export {};
