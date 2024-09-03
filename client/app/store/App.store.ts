import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class AppStore {
  @observable username = "";
  @observable password = "";
  @observable accessToken = "";
  @observable profileData = { username: "" };

  constructor() {
    makeObservable(this);
  }

  @action
  async login(username: string, password: string) {
    password = password.toLowerCase();
    const response = await axios.post("http://localhost:3000/auth/login", {
      username,
      password,
    });
    this.accessToken = response.data.access_token;
    console.log(this.accessToken);
    this.getProfile();
  }

  @action
  async getProfile() {
    const response = await axios.get("http://localhost:3000/profile", {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    console.log(response.data);
    this.profileData = response.data;
  }
}

const appStore = new AppStore();
export default appStore;
