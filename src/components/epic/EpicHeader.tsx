import { 
  AudioWaveform, 
  ChartBar, 
  ClipboardList, 
  PhoneCall, 
  UserMinus, 
  Lock, 
  Link2, 
  Bell, 
  FileText,
  Home,
  Mail,
  Calendar,
  X,
  Search,
  ArrowUp,
  MessageSquare,
  FolderOpen,
  Layout,
  Store
} from "lucide-react";

import { useScenario } from "@/ScenarioContext";

const EpicHeader = ({ openScribe }: { openScribe: () => void }) => {
  const { currentScenario, isScenarioActive } = useScenario();
  
  // Default provider name if no scenario is active
  const providerName = isScenarioActive && currentScenario
    ? currentScenario.patientData.providerName.toUpperCase().replace(/^DR\.\s+/i, '')
    : "DAVID COMMONS";
  
  // Default patient name for the tab
  const patientName = isScenarioActive && currentScenario
    ? currentScenario.patientData.patientName
    : "TestPatient, Test";
  
  return (
    <header className="bg-gradient-to-b from-[#1a3c5e] to-[#002244]">
      {/* Top row */}
      <div className="flex items-center gap-2 px-0 py-1 bg-[#003366] text-white">
        <img
          src="/lovable-uploads/f93e6fe5-b95c-469a-b5a9-5e8190139ac4.png"
          alt="Epoch"
          className="h-9"
        />
        <span className="text-xs font-medium mr-1">Application Server uppcpusrapp108 - FDE</span>
        <span className="text-xs font-medium">MED PRACTICE PPMC - {providerName}</span>
        
        <div className="flex items-center ml-auto gap-4">
          <div className="flex items-center">
            <Search className="h-4 w-4 absolute ml-2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search (Ctrl+Space)" 
              className="pl-8 pr-2 py-0.5 text-xs rounded text-black w-48 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-3 bg-[#f5f5dc] px-3 py-0.5 rounded-sm">
            <div className="flex items-center gap-1">
              <ArrowUp className="h-4 w-4 text-red-600" />
              <span className="text-xs text-red-600">42</span>
              <span className="text-xs text-red-600 ml-0.5">Staff Message</span>
            </div>
            <div className="flex items-center gap-1">
              <PhoneCall className="h-4 w-4 text-red-600" />
              <ArrowUp className="h-4 w-4 text-red-600" />
              <span className="text-xs text-red-600">21</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4 text-red-600" />
              <ArrowUp className="h-4 w-4 text-red-600" />
              <span className="text-xs text-red-600">8</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4 text-red-600" />
              <ArrowUp className="h-4 w-4 text-red-600" />
              <span className="text-xs text-red-600">513</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second row - Navigation icons */}
      <div className="flex items-center gap-1 px-2 py-1 bg-[#002244] text-white text-xs">
        <button className="flex items-center gap-1 px-2 py-1 hover:bg-[#003366] rounded-sm">
          <div className="rounded-full bg-[#FFDA63] p-1">
            <AudioWaveform className="h-3 w-3"  />
          </div>
          </button>
          <div className="h-4 w-[1px] bg-gray-600 mx-1" />
          <button className="nav-item">
            <ChartBar className="h-3 w-3" style={{ color: '#F06292' }} />
            <span>Chart</span>
          </button>
          <button className="nav-item">
            <ClipboardList className="h-3 w-3" style={{ color: '#87CEEB' }} />
            <span>Encounters</span>
          </button>
          <button className="nav-item">
            <PhoneCall className="h-3 w-3" style={{ color: '#90EE90' }} />
            <span>Telephone Call</span>
          </button>
          <button className="nav-item">
            <UserMinus className="h-3 w-3" style={{ color: '#98FB98' }} />
          <span>Mark Patients for Merge</span>
        </button>
        <button className="nav-item">
          <Lock className="h-3 w-3" style={{ color: 'green' }} />
          <span>Secure</span>
        </button>
        <button className="nav-item">
          <Link2 className="h-3 w-3" />
          <span>Links</span>
        </button>
        <button className="nav-item">
          <Bell className="h-3 w-3" />
          <span>Remind Me</span>
        </button>
        <button className="nav-item">
          <FileText className="h-3 w-3" />
          <span>Reports</span>
        </button>
        <button className="nav-item">
          <FolderOpen className="h-3 w-3" />
          <span>Open Case</span>
        </button>
        <button className="nav-item">
          <Layout className="h-3 w-3" />
          <span>Snapboard</span>
        </button>
        <button className="nav-item">
          <Store className="h-3 w-3" />
          <span>OR Marketplace</span>
        </button>
        {/* New elements */}
        <div className="ml-auto flex items-center gap-2">
          {/* Notifications */}
          <div className="relative">
            <Bell className="h-5 w-5 text-white cursor-pointer" />
            <span className="absolute top-[-4px] right-[-4px] bg-red-500 text-white text-[0.6rem] rounded-full px-1">
              42
            </span>
          </div>
          {/* Profile */}
          <div className="relative">
            <div className="rounded-full h-6 w-6 bg-gray-400 text-white flex items-center justify-center cursor-pointer">
              BK
            </div>
          </div>
          {/* Logout */}
          <button className="text-xs text-white hover:underline">Log Out</button>
        </div>
      </div>

      {/* Third row - Home bar and patient tab */}
      <div className="flex items-center gap-1 px-2 py-1 bg-[#001833] text-white text-xs">
        <button className="flex items-center gap-1 px-3 py-1 rounded-md bg-[#003366]">
          <Home className="h-3 w-3" />
        </button>
        <button className="flex items-center gap-1 px-3 py-1 rounded-md bg-[#003366]">
          <Mail className="h-3 w-3" />
        </button>
        <button className="flex items-center gap-1 px-3 py-1 rounded-md bg-[#003366]">
          <Calendar className="h-3 w-3" />
        </button>
        <div className="ml-2 flex items-center bg-[#003366] rounded-t-md px-3 py-1">
          <span className="mr-2">{patientName}</span>
          <X className="h-3 w-3 hover:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default EpicHeader;
