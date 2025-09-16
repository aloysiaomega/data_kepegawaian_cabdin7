// src/pages/DokumenUpload/DokumenUpload.jsx

import React, { useState } from 'react';
import './DokumenUpload.css';

export default function DokumenUpload({ onCancel, onUpload }) {
  const [jenis, setJenis] = useState('');
  const [file, setFile] = useState(null);

  const handleJenisChange = e => setJenis(e.target.value);

  const handleFileChange = e => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (onUpload && jenis && file) {
      onUpload({ jenis, file });
    }
  };

  return (
    <div className="dokumen-upload-page">
      <h2>Unggah Dokumen Baru</h2>

      <form className="upload-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="jenisDokumen">Jenis Dokumen</label>
          <select
            id="jenisDokumen"
            value={jenis}
            onChange={handleJenisChange}
            required
          >
            <option value="" disabled>
              Pilih Jenis Dokumen
            </option>
            <option>SK CPNS/PNS</option>
            <option>Ijazah</option>
            <option>Sertifikat</option>
            <option>SK Pangkat Terakhir</option>
            <option>Lainnya</option>
          </select>
        </div>

        <div className="form-group">
          <label>Seret file ke sini atau klik untuk mengunggah</label>
          <div
            className={`upload-dropzone${file ? ' has-file' : ''}`}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => document.getElementById('fileInput').click()}
          >
            {file ? file.name : 'PDF, JPG, PNG • max 10MB'}
            <input
              type="file"
              id="fileInput"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              hidden
            />
          </div>
          <p className="file-guidelines">
            Format file PDF, JPG, PNG dengan ukuran maksimal 10MB per file.
          </p>
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className="btn-upload"
            disabled={!jenis || !file}
          >
            Unggah Dokumen
          </button>
          <button
            type="button"
            className="btn-cancel"
            onClick={onCancel}
          >
            Batal
          </button>
        </div>
      </form>

      <aside className="upload-guide">
        <h3>Panduan Unggah Dokumen</h3>
        <ul>
          <li>Format file PDF, JPG, atau PNG • max 10MB per file.</li>
          <li>Jenis dokumen sesuai kebutuhan.</li>
          <li>Bisa berupa Surat, SK Mengajar, Sertifikat, atau pendukung lain.</li>
          <li>Pastikan dokumen jelas, tidak buram, lengkap.</li>
        </ul>
      </aside>
    </div>
);
}
