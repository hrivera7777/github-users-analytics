export interface User {
  name?: string | null;
  email?: string | null;
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  starred_at?: string;
  score: number;
  bio?: string;
  followers: number;
  following?: number;
  created_at?: string;
  location?: string;
  public_repos?: number;
  public_gists?: number;
}

export interface SearchUsersResponse {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}

export interface ContextSearchParams {
  search: string;
  setSearch: (search: string) => void;
}
