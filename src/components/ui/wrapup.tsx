import React from "react";
import { useFlowsheet } from "@/AutoFillContexts";


const WrapUp = () => {
    // orders
    const { ordersList: ordersListContext } = useFlowsheet();

    let parsedFlowsheet: Record<string, any> = {};
  
    try {
      if (ordersListContext && ordersListContext.trim() !== "") {
        parsedFlowsheet = JSON.parse(ordersListContext);
      }
    } catch (err) {
      console.warn("Invalid JSON in flowsheet context:", err);
    }
  
    const orders = Array.isArray(parsedFlowsheet.orders) ? parsedFlowsheet.orders : [];

    console.log(orders)

// for problem list
    const { problemsList: problemsListContext } = useFlowsheet();

    let parsedProblemList: Record<string, any> = {};
  
    try {
      if (problemsListContext && problemsListContext.trim() !== "") {
        parsedProblemList = JSON.parse(problemsListContext);
      }
    } catch (err) {
      console.warn("Invalid JSON in flowsheet context:", err);
    }
  
    const problems = Array.isArray(parsedProblemList.problems) ? parsedProblemList.problems : [];

    console.log(problems)

    // for education
    const { educationInstructions: educationInstructionsContext } = useFlowsheet();
    const education = educationInstructionsContext
    console.log(educationInstructionsContext)
  
    return (
        <div className="flex w-full p-2 bg-white text-xs font-sans gap-2">
        {/* Left Panel */}
        <div className="w-1/2 space-y-2 border border-gray-300 p-2">
          {/* Patient Instructions */}
          <div className="border border-gray-300">
            <div className="bg-blue-100 font-semibold p-1 border-b">Patient Instructions</div>
            <div className="p-1 flex justify-between items-center text-[11px]">
              <span>Attach reference</span>
              <button className="text-blue-700 text-xs font-semibold">+ Add Clinical References</button>
            </div>
            <textarea className="w-full border border-gray-300 h-28 mt-1 p-1 text-[11px]" value={education} readOnly/>
          </div>

          {/* Problem list */}
        {/* Problem list */}
        <div className="border border-gray-300">
        <div className="bg-blue-100 font-semibold p-1 border-b">Problem List</div>
        <div className="p-1 flex justify-between items-center text-[11px]">
            <span>Attach reference</span>
            <button className="text-blue-700 text-xs font-semibold">+ Add Clinical References</button>
        </div>
        <textarea
            className="w-full border border-gray-300 h-28 mt-1 p-1 text-[11px]"
            value={problems.map(p => `- ${p}`).join("\n\n")}
            readOnly
        />
        </div>



  
          {/* Communications */}
          <div className="border border-gray-300">
            <div className="bg-blue-100 font-semibold p-1 border-b flex justify-between items-center">
              <span>Communications</span>
              <button className="text-blue-700 text-xs">+ New Communication</button>
            </div>
            <div className="p-2">
              <div className="text-[11px] mb-1">Templates</div>
              <div className="border border-gray-300 p-1 flex justify-between items-center text-[11px] bg-gray-100">
                <span>No letter</span>
                <button className="text-blue-700 text-xs">+ Create</button>
              </div>
            </div>
          </div>
  
          {/* Review All */}
          <div className="border border-gray-300">
            <div className="bg-purple-200 font-semibold p-1 border-b">Review All</div>
            <div className="p-1">
              <div className="text-red-600 text-[11px]">Allergies</div>
              <div className="text-[11px]">Not on File</div>
              <div className="text-blue-700 text-[11px] underline">Open Allergies Activity</div>
              <div className="text-gray-500 text-[11px]">Never Reviewed</div>
            </div>
          </div>
        </div>
  
        {/* Right Panel */}
        <div className="w-1/2 space-y-2 border border-gray-300 p-2">
          {/* Physician Level of Service */}
          <div className="border border-gray-300">
            <div className="bg-green-100 font-semibold p-1 border-b">Physician Level of Service</div>
            <div className="grid grid-cols-4 gap-1 p-2 text-[11px]">
              {["NEW2", "NEW3", "NEW4", "NEW5", "EST1", "EST2", "EST3", "EST4", "EST5", "CON2", "CON3", "CON4", "CON5"].map(code => (
                <button key={code} className="border p-1 text-center bg-white hover:bg-blue-100">{code}</button>
              ))}
            </div>
            <div className="px-2 text-[11px]">
              <div className="my-1">Modifiers may be added after LOS is selected.</div>
              <div className="flex items-center gap-2">
                <span>Additional E/M Codes:</span>
                <input type="text" className="border p-0.5 text-[11px]" value="G2211" readOnly />
              </div>
              <div className="mt-2">
                <span>Authorizing provider: LAZURE, DONALD A</span>
              </div>
            </div>
          </div>

          {/* Queue orders */}
          <div className="border border-gray-300">
            <div className="bg-pink-100 font-semibold p-1 border-b">Queue Orders</div>

            {orders.length > 0 && (
                <div className="p-2 space-y-1 text-[11px]">
                {orders.map((order: string, idx: number) => (
                    <div key={idx} className="bg-white border p-1 rounded shadow-sm">
                    {order}
                    </div>
                ))}
                </div>
            )}

            <div>
                <button className="underline p-2">
                    Place Orders
                </button>
            </div>
            </div>
  
          {/* LOS based on time */}
          <div className="border border-gray-300 p-2 text-[11px]">
            <div className="font-semibold">Calculate LOS based on time</div>
            <div className="mt-1">Patient type:
              <button className="ml-2 px-2 py-0.5 border border-gray-300 bg-blue-100 font-semibold">New</button>
              <button className="ml-1 px-2 py-0.5 border border-gray-300 bg-white">Established</button>
            </div>
            <div className="mt-1 space-x-1">
              {[15, 30, 45, 60].map(min => (
                <button key={min} className="px-2 py-0.5 border border-gray-300">{min}</button>
              ))}
            </div>
          </div>
  
          {/* Follow-up */}
          <div className="border border-gray-300 p-2 text-[11px]">
            <div className="font-semibold mb-1">Follow-up</div>
            <div className="mb-1">
              <span>Return in:</span>
              <div className="space-x-1 mt-1">
                {["4 Weeks", "3 Months", "6 Months", "1 Years"].map(label => (
                  <button key={label} className="px-2 py-0.5 border border-gray-300">{label}</button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" />
              <label>PRN</label>
              <input type="checkbox" />
              <label>Recheck</label>
              <input type="checkbox" />
              <label>Annual physical</label>
            </div>
          </div>
        </div>
      </div>
    )
}

export default WrapUp