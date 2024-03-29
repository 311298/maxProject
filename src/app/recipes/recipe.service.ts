import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is a simple test',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
    ),
    new Recipe(
      'A test another recipe',
      'this is a simple test',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); // this will send the new copy of it and if we need any modification
  }
}
