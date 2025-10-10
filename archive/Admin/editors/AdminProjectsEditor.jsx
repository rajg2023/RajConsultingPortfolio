import React, { useMemo, useState } from 'react';
import { useContentManager } from '../../../hooks/useContentManager';
import { Plus, Trash2, ArrowUp, ArrowDown, Save } from 'lucide-react';

const Field = ({ label, value, onChange, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const TextArea = ({ label, value, onChange, rows = 3, placeholder }) => (
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

const TagInput = ({ label, values = [], onChange, placeholder }) => {
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

const AdminProjectsEditor = () => {
  const { content, updateSection, addItem, editItem, deleteItem, saveContent } = useContentManager();
  const projects = useMemo(() => content.projects || [], [content.projects]);

  const addProject = () => {
    addItem('projects', {
      title: 'New Project',
      summary: '',
      tech: [],
      image: '/media/project.png',
      url: '',
      repo: ''
    });
  };

  const update = (id, patch) => {
    const current = projects.find((p) => p.id === id) || {};
    editItem('projects', id, { ...current, ...patch });
  };

  const move = (index, dir) => {
    const newIndex = index + dir;
    if (newIndex < 0 || newIndex >= projects.length) return;
    const copy = [...projects];
    const [item] = copy.splice(index, 1);
    copy.splice(newIndex, 0, item);
    updateSection('projects', copy);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Projects Editor</h2>
        <div className="flex gap-2">
          <button onClick={addProject} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
            <Plus size={16} /> Add Project
          </button>
          <button onClick={saveContent} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            <Save size={16} /> Save Draft
          </button>
        </div>
      </div>

      {projects.length === 0 && (
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">No projects yet. Click "Add Project" to create one.</div>
      )}

      <div className="space-y-6">
        {projects.map((p, idx) => (
          <div key={p.id} className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">{p.title || 'Untitled Project'}</h3>
              <div className="flex items-center gap-2">
                <button onClick={() => move(idx, -1)} className="p-2 rounded-lg border hover:bg-gray-50" title="Move up"><ArrowUp size={16} /></button>
                <button onClick={() => move(idx, 1)} className="p-2 rounded-lg border hover:bg-gray-50" title="Move down"><ArrowDown size={16} /></button>
                <button onClick={() => deleteItem('projects', p.id)} className="p-2 rounded-lg border text-red-600 hover:bg-red-50" title="Delete"><Trash2 size={16} /></button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Title" value={p.title} onChange={(v) => update(p.id, { title: v })} />
              <Field label="Image URL" value={p.image} onChange={(v) => update(p.id, { image: v })} placeholder="/media/project.png" />
              <Field label="Live URL" value={p.url} onChange={(v) => update(p.id, { url: v })} placeholder="https://..." />
              <Field label="Repo URL" value={p.repo} onChange={(v) => update(p.id, { repo: v })} placeholder="https://github.com/..." />
            </div>

            <TextArea label="Summary" value={p.summary} onChange={(v) => update(p.id, { summary: v })} rows={4} />

            <TagInput label="Tech" values={p.tech} onChange={(vals) => update(p.id, { tech: vals })} placeholder="Add technology" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProjectsEditor;
