import SearchService from "./SearchService.js";
import SearchParam from "./SearchParam.js";
import DomRechercheSecondaire from "../dom/Select.js";

class SearchEvent {
  constructor() {
    this.searchService = new SearchService();
    this.select = new DomRechercheSecondaire();
  }

  listen() {
    this.onKeyUpPrimarySearch();
    this.onKeyUpTagInput();
    this.onTagClick();
    this.onCloseTagSelected();
    this.onLoadMain();
  }

  onKeyUpPrimarySearch() {
    document
      .getElementById("research__principal__text-area")
      .addEventListener("keyup", () => {
        this.searchParam = new SearchParam();
        if (this.searchParam.primarySearchValid() || this.searchParam.primarySearchEmpty()) {
          this.searchService.launchSearch();
        }
      });
  }

  onKeyUpTagInput() {
    this.table = [...document.getElementsByClassName("research__tag__name")];
    this.table.forEach((element) => {
      element.addEventListener("keyup", DomRechercheSecondaire.tagInputFiter);
    });
  }

  onTagClick() {
    document.getElementById("researchTag").addEventListener("click", () => {
      this.searchService.launchSearch();
      this.searchService.clearInputTag();
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
