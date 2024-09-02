import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class AppStore {
  value = 0;
  username = "";
  password = "";
  accessToken = "";
  profileData = { username: "" };

  constructor() {
    makeObservable(this, {
      value: observable,
      username: observable,
      password: observable,
      profileData: observable,
      login: action,
    });
  }

  increment() {
    // Intermediate states will not become visible to observers.
    this.value++;
  }

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
