import {
  action,
  makeAutoObservable,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

const apiKey = "AIzaSyCb0l_TGhUL_fo5rz21wjgBF9D5JnxJa10";
// const url = `https://places.googleapis.com/v1/places/ChIJj61dQgK6j4AR4GeTYWZsKWw?fields=id,displayName&key=${apiKey}`;
const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=cruise&location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&key=${apiKey}`;
class MapStore {
  @observable data = [];
  @observable photo = {};
  apiKey = "AIzaSyCb0l_TGhUL_fo5rz21wjgBF9D5JnxJa10";

  constructor() {
    makeAutoObservable(this);
    // makeObservable(this);
  }

  @action
  async getMapData() {
    console.log("getting data");
    const response = await fetch(url);
    const data = await response.json();
    // this.data = data.results;
    runInAction(() => {
      this.data = data.results;
    });
    this.getPhoto();
  }

  @action
  async getPhoto() {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photoreference=${this.data[0].photos[0].photo_reference}&key=${apiKey}`
    );
    const data = await response.blob();
    console.log(data);
    runInAction(() => {
      this.photo = data;
    });
  }
}

export const mapStore = new MapStore();
