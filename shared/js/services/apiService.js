// shared/js/services/apiService.js

import {
    FurnitureEntity,
    DetailFurnitureEntity,
    CategoryEntity
  } from '../models.js';
  
  const BASE_URL = 'https://your-backend-domain.com'; // Replace with actual domain
  const ENDPOINTS = {
    allFurniture: '/api/v1/furniture/',
    detailFurniture: '/api/v1/furniture/', 
    allCategories: '/api/v1/categories/'
  };
  
  /**
   * Fetch all furniture items => array of FurnitureEntity
   */
  export async function fetchAllFurniture() {
    const response = await fetch(`${BASE_URL}${ENDPOINTS.allFurniture}`);
    const data = await response.json();
    return data.map(item => new FurnitureEntity(item));
  }
  
  /**
   * Fetch furniture detail => DetailFurnitureEntity
   */
  export async function fetchFurnitureDetail(furnitureId) {
    const response = await fetch(`${BASE_URL}${ENDPOINTS.detailFurniture}${furnitureId}/`);
    const data = await response.json();
    return new DetailFurnitureEntity(data);
  }
  
  /**
   * Fetch all categories => array of CategoryEntity
   */
  export async function fetchAllCategories() {
    const response = await fetch(`${BASE_URL}${ENDPOINTS.allCategories}`);
    const data = await response.json();
    return data.map(cat => new CategoryEntity(cat));
  }
  