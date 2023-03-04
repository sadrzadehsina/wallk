import postsData from "./post-data.json";

let posts = [...postsData];

const PAGE_SIZE: number = 20;

async function readAll(page: number = 0) {
  return posts.slice(page, PAGE_SIZE);
}

async function read(postId: string) {
  return posts.find((post) => post.id === postId);
}

export { readAll, read };
