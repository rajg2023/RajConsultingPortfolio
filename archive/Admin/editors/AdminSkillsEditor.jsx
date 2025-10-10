import React, { useMemo } from 'react';
import { useContentManager } from '../../../hooks/useContentManager';
import { Plus, Trash2, Save, ArrowUp, ArrowDown } from 'lucide-react';

const categories = ['Technical', 'Testing & QA', 'Data Analytics', 'Leadership', 'Tools & Platforms'];

const Field = ({ label, value, onChange, type = 'text', placeholder }) => (
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

const Select = ({ label, value, onChange, options }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select
      value={value || options[0]}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const Checkbox = ({ label, checked, onChange }) => (
  <label className="inline-flex items-center gap-2 text-sm text-gray-700">
    <input type="checkbox" checked={!!checked} onChange={(e) => onChange(e.target.checked)} />
    {label}
  </label>
);

const AdminSkillsEditor = () => {
  const { content, updateSection, addItem, editItem, deleteItem, saveContent } = useContentManager();
  const skills = useMemo(() => content.skills || [], [content.skills]);

  const addSkill = () => {
    addItem('skills', { name: 'New Skill', category: 'Technical', level: 70, years: '1 year', certified: false });
  };

  const update = (id, patch) => {
    const current = skills.find((s) => s.id === id) || {};
    editItem('skills', id, { ...current, ...patch });
  };

  const move = (index, dir) => {
    const newIndex = index + dir;
    if (newIndex < 0 || newIndex >= skills.length) return;
    const copy = [...skills];
    const [item] = copy.splice(index, 1);
    copy.splice(newIndex, 0, item);
    updateSection('skills', copy);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Skills Editor</h2>
        <div className="flex gap-2">
          <button onClick={addSkill} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
            <Plus size={16} /> Add Skill
          </button>
          <button onClick={saveContent} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            <Save size={16} /> Save Draft
          </button>
        </div>
      </div>

      {skills.length === 0 && (
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">No skills yet. Click "Add Skill" to create one.</div>
      )}

      <div className="space-y-6">
        {skills.map((s, idx) => (
          <div key={s.id} className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">{s.name || 'Skill'}</h3>
              <div className="flex items-center gap-2">
                <button onClick={() => move(idx, -1)} className="p-2 rounded-lg border hover:bg-gray-50" title="Move up"><ArrowUp size={16} /></button>
                <button onClick={() => move(idx, 1)} className="p-2 rounded-lg border hover:bg-gray-50" title="Move down"><ArrowDown size={16} /></button>
                <button onClick={() => deleteItem('skills', s.id)} className="p-2 rounded-lg border text-red-600 hover:bg-red-50" title="Delete"><Trash2 size={16} /></button>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <Field label="Name" value={s.name} onChange={(v) => update(s.id, { name: v })} />
              <Select label="Category" value={s.category} onChange={(v) => update(s.id, { category: v })} options={categories} />
              <Field label="Level (%)" value={s.level} onChange={(v) => update(s.id, { level: Number(v) || 0 })} type="number" placeholder="0-100" />
              <Field label="Years" value={s.years} onChange={(v) => update(s.id, { years: v })} placeholder="e.g., 3 years" />
            </div>

            <div className="mt-3">
              <Checkbox label="Certified" checked={s.certified} onChange={(v) => update(s.id, { certified: v })} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSkillsEditor;
