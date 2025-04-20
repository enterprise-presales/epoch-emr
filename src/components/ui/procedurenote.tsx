import React from "react";
import { useFlowsheet } from "@/AutoFillContexts";

const ProcedureNote = () => {
    const { procedureNote: procedureNoteContext } = useFlowsheet();
    const procedurenote = procedureNoteContext
    console.log(procedureNoteContext)

    return (
        <div className="flex w-full p-2 bg-white text-xs font-sans gap-2">

            <textarea className="w-full border border-gray-300 h-44 mt-1 p-1 text-[11px]" value={procedurenote} readOnly/>

      </div>
    )
}

export default ProcedureNote