export const loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const [posts] = await Promise.all([postsResponse]);
    const postsJson = await posts.json();
    return postsJson;
  };