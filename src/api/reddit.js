export const getSubredditPosts = async () => {
    const response = await fetch(`https://www.reddit.com/r/China/top/.json?count=20`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
}