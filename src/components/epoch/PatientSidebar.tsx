import { Globe, Circle, Users, CreditCard, TestTube2, Eye, Calendar, Plus, ChevronDown, Stethoscope } from "lucide-react";
const PatientSidebar = () => {
  return <div className="h-full w-64 bg-[#003861] text-[#b2e2ff] border-r border-[--epoch-border] flex flex-col">
      <div className="flex-1 p-4 space-y-4">
        <div className="flex items-center gap-4">
          <div className="epoch-patient-avatar">TT</div>
          <div>
            <div className="font-semibold">SFDPH Scribe</div>
            <div className="text-sm opacity-90">Demo | 04.22.2025</div>
            <div className="text-sm opacity-90">DOB: 04/15/1850</div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="text-sm">Interpreter: Not needed</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-sm">Code: Not on file</span>
          </div>

          <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
            <div className="text-sm">Isolation: None</div>
          </div>

          <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
            <div className="text-sm font-semibold mb-1">Providers Attending</div>
            <div className="flex items-center gap-2">
              <Stethoscope className="h-4 w-4" />
              <span className="text-sm">Dr. David Commons</span>
            </div>
          </div>

          <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
            <div className="bg-[#f7ca2c] p-2 rounded text-[#003861] px-[4px] py-0">
              <span>Allergies (6)</span>
            </div>
          </div>

          <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
            <div className="text-sm font-semibold mb-1">Primary Coverage:</div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span className="text-sm">Medicare</span>
            </div>
          </div>

          <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
            <div className="text-sm font-semibold mb-1">PREFERRED LAB:</div>
            <div className="flex items-center gap-2">
              <TestTube2 className="h-4 w-4" />
              <span className="text-sm">Quest Diagnostics</span>
            </div>
          </div>

          <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
            <div className="text-sm font-semibold mb-1">PREVIOUS EYE EXAMS:</div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span className="text-sm">Last: 3 months ago</span>
            </div>
          </div>

          <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
            <div className="text-sm font-semibold mb-1">NEXT VISIT:</div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">6/27/2025</span>
            </div>
          </div>

          <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
            <div className="flex justify-between items-center mb-1">
              <div className="text-sm font-semibold text-[#507ab9]">IMAGING & PROCEDURES:</div>
              <button className="text-[#b2e2ff] hover:text-white">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <span className="text-sm">No recent procedures</span>
          </div>

          <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
            <div className="text-sm font-semibold mb-1 text-[#bb64be]">OPHTHALMOLOGY PROBLEM LIST:</div>
            <div className="text-sm mb-2">Other problems (3)</div>
          </div>

          <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
            <div className="text-sm font-semibold mb-1">My Pat List Reminders:</div>
            <div className="text-sm">None</div>
          </div>

          <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
            <div className="text-sm font-semibold mb-1">MME/D:</div>
            <div className="text-sm">&lt;50: 30 MME/Day</div>
          </div>

          <div className="border-t border-opacity-20 border-[#b2e2ff] pt-2">
            <div className="text-sm font-semibold mb-1 text-[#bb64be]">SOCIAL DETERMINANTS:</div>
            <div className="flex justify-end gap-2 mt-2">
              <Circle className="h-4 w-4 text-green-700" />
              <Circle className="h-4 w-4 text-yellow-700" />
              <Circle className="h-4 w-4 text-orange-700" />
              <Circle className="h-4 w-4 text-blue-700" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 flex justify-center border-t border-[#1d7e74] bg-[#002244] cursor-pointer hover:bg-[#001833] transition-colors">
        <ChevronDown className="h-4 w-4" />
      </div>
    </div>;
};
export default PatientSidebar;
