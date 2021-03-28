import axios from 'axios';

const path = '/repositories';
const url = `${process.env.REACT_APP_GITHUB_API}${path}`;

class Repository {
  constructor(raw) {
    this.id = raw.id;
    this.avatarUrl = raw.owner.avatar_url;
    this.projectName = raw.full_name;
    this.forkCount = raw.fork_count;
    this.starCount = raw.stargazers_count;
    this.watcherCount = raw.watchers_count;
  }
  static getList = async (params) => {
    try {
      const { status, data } = await axios.get(url, { params });
      const transformedData = data.items.map((item) => new Repository(item));
      return { status, data: transformedData };
    } catch (error) {
      console.error(error);
      return { error };
    }
  };
}

export default Repository;
