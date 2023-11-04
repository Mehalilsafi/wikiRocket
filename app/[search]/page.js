import React from 'react'
import getSearch from "@/lib/getSearchItems"
import Item from "./components/Item"

export default async function searchResult({params}) {
    const {id}=params;
    
    const data = await getSearch(id);
    const results = data?.query?.pages
    console.log(results);
    const content = (
        <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
            {results
                ? Object.values(results).map(result => {
                    return  <Item key={result.pageid} result={result} />
                  
                  })
                : <h2 className="p-2 text-xl">{`${id} Not Found`}</h2>
            }
        </main>
    )
  return content;
}
