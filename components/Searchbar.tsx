"use client"
import { scrapeAndStoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react";

const isValidAmazonProductUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url); 
    const hostname = parsedUrl.hostname; 
    // check: if hostname contains amazon.com, amazon., or ends with amazon
    if(hostname.includes("amazon.com") || hostname.includes("amazon.") || hostname.endsWith("amazon")) {
      return true; 
    }
  } catch(error) {
    return false; 
  }
}; 

export default function Searchbar() {
  // useState
  const [searchPrompt, setSearchPrompt] = useState(""); 
  const [isLoading, setIsLoading] = useState(false); 

  // handleSubmit 
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    // check: if we have a URL 
    const isValidLink = isValidAmazonProductUrl(searchPrompt); 
    if(!isValidLink) return alert("Please provide  a valid Amazon link"); 
    try {
      setIsLoading(true); 
      // scrape first product page 
      const product = await scrapeAndStoreProduct(searchPrompt); 
    } catch(error) {  
      setIsLoading(false); 
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input 
        type="text"
        name={searchPrompt}
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link"
        className="searchbar__input"
      />
      <button 
        type="submit" 
        className="searchbar__btn"
        disabled={searchPrompt === ""}
      >{isLoading ? "Searching..." : "Search" }</button>
    </form>
  )
}