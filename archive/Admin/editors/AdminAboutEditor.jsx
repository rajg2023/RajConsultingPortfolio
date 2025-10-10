import React, { useEffect, useState } from 'react';
import { useContentManager } from '../../../hooks/useContentManager';
import { Save } from 'lucide-react';

const TextInput = ({ label, value, onChange, type = 'text', placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const TextArea = ({ label, value, onChange, rows = 5, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const TagList = ({ label, values = [], onChange, placeholder }) => {
  const [draft, setDraft] = useState('');
  const add = () => {
    const v = draft.trim();
    if (!v) return;
    onChange([...(values || []), v]);
    setDraft('');
  };
  const remove = (i) => onChange(values.filter((_, idx) => idx !== i));
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="flex gap-2 mb-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={placeholder}
          className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={add} className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Add</button>
      </div>
      <div className="flex flex-wrap gap-2">
        {(values || []).map((v, i) => (
          <span key={i} className="inline-flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-full text-sm">
            {v}
            <button onClick={() => remove(i)} className="text-gray-500 hover:text-red-600">✕</button>
          </span>
        ))}
      </div>
    </div>
  );
};

const AdminAboutEditor = () => {
  const { content, updateSection, saveContent, isLoading } = useContentManager();
  const about = content.about || {};

  const update = (patch) => updateSection('about', { ...about, ...patch });

  useEffect(() => {
    // no-op: content manager tracks hasChanges automatically
  }, [about]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">About Editor</h2>
        <button
          onClick={saveContent}
          disabled={isLoading}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          <Save size={16} /> Save Draft
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <TextInput label="Name" value={about.name} onChange={(v) => update({ name: v })} />
        <TextInput label="Title" value={about.title} onChange={(v) => update({ title: v })} />
      </div>

      <TextArea label="Bio" value={about.bio} onChange={(v) => update({ bio: v })} rows={6} />

      <div className="grid md:grid-cols-3 gap-6">
        <TextInput label="Email" value={about.email} onChange={(v) => update({ email: v })} />
        <TextInput label="Phone" value={about.phone} onChange={(v) => update({ phone: v })} />
        <TextInput label="Location" value={about.location} onChange={(v) => update({ location: v })} />
      </div>

      <TextInput label="Avatar URL (/media/...)" value={about.avatar} onChange={(v) => update({ avatar: v })} placeholder="/media/avatar.png" />

      <TagList label="Specializations" values={about.specializations} onChange={(vals) => update({ specializations: vals })} placeholder="Add specialization" />
      <TagList label="Achievements" values={about.achievements} onChange={(vals) => update({ achievements: vals })} placeholder="Add achievement" />
    </div>
  );
};

export default AdminAboutEditor;
