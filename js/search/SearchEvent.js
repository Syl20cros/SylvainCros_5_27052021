import SearchService from "./SearchService.js";

class SearchEvent {
  constructor() {
    this.searchService = new SearchService();
  }

  listen() {
    this.onKeyUp();
    this.onTagClick();
    this.onCloseTagSelected();
    this.onLoadMain();
  }

  onKeyUp() {
    document.getElementById("research__principal__text-area").addEventListener("keyup", () => {
        this.searchService.launchSearch();
      });
  }

  onTagClick() {
    document.getElementById("researchTag").addEventListener("click", () => {
      this.searchService.launchSearch();
    });
  }

  onCloseTagSelected() {
    document.getElementById("tagsSelected").addEventListener("click", () => {
      this.searchService.launchSearch();
    });
  }

  onLoadMain() {
    document.addEventListener("DOMContentLoaded", () => {
      this.searchService.launchSearch();
    });
  }
}

export default SearchEvent;
