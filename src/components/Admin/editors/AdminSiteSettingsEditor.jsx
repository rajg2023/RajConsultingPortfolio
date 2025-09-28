import React from 'react';
import { useContentManager } from '../../../hooks/useContentManager';
import { Save, Image as ImageIcon, PaintBucket } from 'lucide-react';

const ColorInput = ({ label, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="flex items-center gap-3">
      <input
        type="color"
        value={value || '#0f172a'}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-12 p-1 rounded border"
        aria-label={`${label} color picker`}
      />
      <input
        type="text"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="#0f172a"
        className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
);

const TextInput = ({ label, value, onChange, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type="text"
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const Select = ({ label, value, onChange, options }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
);

const AdminSiteSettingsEditor = () => {
  const { content, updateSection, saveContent } = useContentManager();
  const site = content.site || {};
  const theme = site.theme || {};

  const updateTheme = (patch) => updateSection('site', { ...site, theme: { ...theme, ...patch } });
  const updateSite = (patch) => updateSection('site', { ...site, ...patch });

  const previewStyle = {
    backgroundColor: theme.backgroundColor || '#0f172a',
    backgroundImage: theme.backgroundImage ? `url(${theme.backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Site Settings</h2>
        <button onClick={saveContent} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
          <Save size={16} /> Save Draft
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <TextInput label="Site Title" value={site.title} onChange={(v) => updateSite({ title: v })} placeholder="ConsultantPro" />
        <TextInput label="Site Description" value={site.description} onChange={(v) => updateSite({ description: v })} placeholder="Your portfolio description" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Select
          label="Theme Mode"
          value={theme.mode || 'light'}
          onChange={(v) => updateTheme({ mode: v })}
          options={[{ value: 'light', label: 'Light' }, { value: 'dark', label: 'Dark' }]}
        />

        <ColorInput
          label="Background Color"
          value={theme.backgroundColor}
          onChange={(v) => updateTheme({ backgroundColor: v })}
        />
      </div>

      <TextInput
        label="Background Image URL (/media/...)"
        value={theme.backgroundImage}
        onChange={(v) => updateTheme({ backgroundImage: v })}
        placeholder="/media/background.jpg"
      />

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Live Preview</h3>
        <div className="rounded-xl border border-gray-200 h-48 flex items-center justify-center text-white" style={previewStyle}>
          <div className="bg-black/30 px-3 py-1 rounded-full text-sm inline-flex items-center gap-2">
            <PaintBucket size={14} /> Background Preview
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <TextInput label="LinkedIn" value={site.social?.linkedin} onChange={(v) => updateSite({ social: { ...(site.social||{}), linkedin: v } })} placeholder="linkedin.com/in/yourname" />
        <TextInput label="GitHub" value={site.social?.github} onChange={(v) => updateSite({ social: { ...(site.social||{}), github: v } })} placeholder="github.com/yourname" />
        <TextInput label="Website" value={site.social?.website} onChange={(v) => updateSite({ social: { ...(site.social||{}), website: v } })} placeholder="https://your-site.com" />
      </div>

      <div className="text-sm text-gray-600">
        <p>Tip: Add images into <code>public/media/</code> and set their paths (e.g., <code>/media/hero.jpg</code>).</p>
      </div>
    </div>
  );
};

export default AdminSiteSettingsEditor;
