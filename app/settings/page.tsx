// app/settings.tsx
'use client';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';
import { preferenceState, filtersState } from '@/recoil/atoms';

const Settings: React.FC = () => {
  const [preference, setPreference] = useRecoilState(preferenceState);
  const [filters, setFilters] = useRecoilState(filtersState);
  const router = useRouter();

  const [localPreference, setLocalPreference] = useState(preference);
  const [localStart, setLocalStart] = useState(filters.start);
  const [localEnd, setLocalEnd] = useState(filters.end);
  const [localTheme, setLocalTheme] = useState('light');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePreferenceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocalPreference(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'start') {
      setLocalStart(Number(value));
    } else {
      setLocalEnd(Number(value));
    }
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocalTheme(event.target.value);
  };

  const validateInputs = () => {
    if (localStart > localEnd) {
      setError('Start month cannot be greater than end month.');
      return false;
    }
    setError(null);
    return true;
  };

  const handleSave = () => {
    if (!validateInputs()) return;
    setLoading(true);
    setPreference(localPreference);
    setFilters({ start: localStart, end: localEnd });
    // Assuming you have a global state for theme
    // setTheme(localTheme); 
    setLoading(false);
    router.push('/');
  };

  const handleReset = () => {
    setLocalPreference('default');
    setLocalStart(0);
    setLocalEnd(11);
    setLocalTheme('light');
    setError(null);
  };

  return (
    <div className="settings">
      <h1>Settings</h1>
      <div>
        <label>
          Preference:
          <select value={localPreference} onChange={handlePreferenceChange}>
            <option value="default">Default</option>
            <option value="alternative">Alternative</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Start Month:
          <input
            type="number"
            name="start"
            min="0"
            max="11"
            value={localStart}
            onChange={handleFilterChange}
          />
        </label>
      </div>
      <div>
        <label>
          End Month:
          <input
            type="number"
            name="end"
            min="0"
            max="11"
            value={localEnd}
            onChange={handleFilterChange}
          />
        </label>
      </div>
      {error && <p className="error">{error}</p>}
      <button onClick={handleSave} disabled={loading}>
        {loading ? 'Saving...' : 'Save'}
      </button>
      <button onClick={handleReset} disabled={loading}>
        Reset to Default
      </button>
    </div>
  );
};

export default Settings;
