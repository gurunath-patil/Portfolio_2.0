import React from "react";

export default function TitleBar(prop){

    return(
     <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
        <h2 className="text-lg md:text-3xl lg:text-4xl capitalize font-semibold">{prop.titleTxt}</h2>
        <p className="border-2 md:border-3 lg:border-4 rounded-md border-amber-300 w-12"></p>
     </div>
    )
}