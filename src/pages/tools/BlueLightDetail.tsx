
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, Clock, Bell, Smartphone, Tv, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const BlueLightDetail: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSetReminder = () => {
    toast({
      title: "Blue light reminder set",
      description: "We'll remind you to reduce blue light exposure in the evening.",
    });
  };

  return (
    <div className="min-h-screen bg-[#121520] text-white p-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate(-1)}
          className="mr-2 text-gray-400"
        >
          <ArrowLeft size={24} />
        </Button>
        <h1 className="text-xl font-bold">Blue Light Management</h1>
      </div>

      <div className="flex flex-col items-center text-center mb-8">
        <div className="h-16 w-16 rounded-full bg-violet-800 flex items-center justify-center mb-4">
          <Eye className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Blue Light Protection</h2>
        <p className="text-gray-300">
          Maximize melatonin production by reducing blue light exposure
        </p>
      </div>

      <div className="p-4 bg-gray-800/40 border border-gray-700 rounded-xl mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Recommended Cutoff</h3>
          <div className="text-xl font-bold text-brand-purple">8:30 PM</div>
        </div>
        
        <p className="text-sm text-gray-300 mb-6">
          Blue light from screens and LED lights suppresses your natural melatonin production. Reducing exposure 1-2 hours before bed helps your body prepare for sleep.
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Bell className="mr-2 h-5 w-5 text-gray-400" />
            <span>Daily reminder</span>
          </div>
          <Switch defaultChecked className="bg-gray-700 data-[state=checked]:bg-brand-purple" />
        </div>
      </div>

      <div className="p-4 bg-gray-800/40 border border-gray-700 rounded-xl mb-6">
        <h3 className="text-lg font-medium mb-4">Blue Light Sources</h3>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-blue-800/60 flex items-center justify-center mr-3">
              <Smartphone className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-medium">Phones & Tablets</h4>
              <p className="text-sm text-gray-400">Enable night mode or wear blue light glasses</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-blue-800/60 flex items-center justify-center mr-3">
              <Tv className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-medium">TVs & Monitors</h4>
              <p className="text-sm text-gray-400">Reduce brightness or use blue light filter apps</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-blue-800/60 flex items-center justify-center mr-3">
              <Lightbulb className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-medium">LED Lighting</h4>
              <p className="text-sm text-gray-400">Switch to warm lighting in the evening</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-medium mb-3">Blue Light Facts</h2>
        <ul className="space-y-4">
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Blue light wavelengths (450-495nm) most strongly suppress melatonin</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Even brief exposure can delay your melatonin window</span>
          </li>
          <li className="flex">
            <div className="mt-1 mr-3">
              <div className="h-4 w-4 rounded-full bg-brand-purple flex items-center justify-center">
                <div className="h-1 w-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-gray-300">Studies show blocking blue light can improve sleep onset by 30+ minutes</span>
          </li>
        </ul>
      </div>
      
      <div className="mt-8">
        <Button 
          onClick={handleSetReminder}
          className="w-full bg-brand-purple hover:bg-purple-600"
        >
          Set Reminder
        </Button>
      </div>
    </div>
  );
};

export default BlueLightDetail;
