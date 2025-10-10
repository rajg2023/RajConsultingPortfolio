import React from 'react';
import { Save, Download, Upload, HardDriveDownload } from 'lucide-react';
import { useContentManager } from '../../hooks/useContentManager';

const AdminToolbar = () => {
  const { hasChanges, saveContent, publishContent, exportContent, importContent, saveToDisk, isLoading } = useContentManager();

  const onImport = (e) => {
    const file = e.target.files?.[0];
    if (file) importContent(file);
    // reset input so same file can be selected again
    e.currentTarget.value = '';
  };

  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      <button
        onClick={saveContent}
        disabled={!hasChanges || isLoading}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          hasChanges ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        <Save size={16} />
        Save Draft
      </button>

      <button
        onClick={publishContent}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700"
      >
        <Download size={16} />
        Publish (download content.json)
      </button>

      <button
        onClick={exportContent}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-purple-600 text-white hover:bg-purple-700"
      >
        <Download size={16} />
        Export JSON
      </button>

      <label className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gray-800 text-white hover:bg-black cursor-pointer">
        <Upload size={16} />
        Import JSON
        <input type="file" accept="application/json" className="hidden" onChange={onImport} />
      </label>

      <button
        onClick={saveToDisk}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700"
      >
        <HardDriveDownload size={16} />
        Save to Disk
      </button>
    </div>
  );
};

export default AdminToolbar;
