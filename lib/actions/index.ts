"use server" 

// Server Actions to be run only in server

import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl: string) {
  if(!productUrl) return ;
  // scrape product URL 
  try {
     const scrapedProduct = await scrapeAmazonProduct(productUrl); 
  } catch(error: any) {
    throw new Error(`Failed to create/update product: ${error.message}`)
  }
  // save into DB 
}