// src/pages/Dokumen/Dokumen.jsx

import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FaSearch, FaEye, FaTrash, FaUpload } from 'react-icons/fa';
import DokumenPreview from './DokumenPreview';
import DokumenUpload from './DokumenUpload';
import './Dokumen.css';
// import './DokumenUpload/DokumenUpload.css';

export default function Dokumen() {
  // Tab & filter state
  const [tab, setTab] = useState('view');
  const [jenis, setJenis] = useState('');
  const [status, setStatus] = useState('');
  const [query, setQuery] = useState('');

  // Dokumen data
  const semuaDokumen = [
    { id: 1, jenis: 'SK CPNS/PNS', nama: 'cpns_1980.pdf', tgl: '10/12/2025', status: 'Menunggu' },
    { id: 2, jenis: 'Ijazah', nama: 'ijazah_1980.pdf', tgl: '10/12/2025', status: 'Terverifikasi' },
    { id: 3, jenis: 'Sertifikat', nama: 'sertifikat_pendidikan_2018.pdf', tgl: '10/12/2025', status: 'Terverifikasi' },
    { id: 4, jenis: 'SK Pangkat Terakhir', nama: 'sk_pangkat_iii_c.pdf', tgl: '10/12/2025', status: 'Terverifikasi' },
    { id: 5, jenis: 'Lainnya', nama: 'sk_mengajar_2023.pdf', tgl: '10/12/2025', status: 'Ditolak' },
    { id: 6, jenis: 'Lainnya', nama: 'sk_mengajar_2023.pdf', tgl: '10/12/2025', status: 'Menunggu' },
  ];

  // Preview modal state
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);

  const openPreview = doc => {
    setSelectedDoc(doc);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setSelectedDoc(null);
    setIsPreviewOpen(false);
  };

  // Filtered list
  const filtered = semuaDokumen
    .filter(d => (jenis ? d.jenis === jenis : true))
    .filter(d => (status ? d.status === status : true))
    .filter(d => d.nama.toLowerCase().includes(query.toLowerCase()));

  // Handlers for DokumenUpload
  const handleUpload = ({ jenisDokumen, file }) => {
    console.log('Upload baru:', jenisDokumen, file);
    // TODO: panggil API atau update state semuaDokumen
    setTab('view');
  };

  const handleCancel = () => {
    setTab('view');
  };

  return (
    <div className="dokumen-page">
      <Sidebar />

      <main className="dokumen-content">
        <header className="dokumen-header">
          <div className="tabs">
            <button
              className={tab === 'view' ? 'active' : ''}
              onClick={() => setTab('view')}
            >
              Lihat & Unduh Dokumen
            </button>
            <button
              className={tab === 'upload' ? 'active' : ''}
              onClick={() => setTab('upload')}
            >
              Unggah Dokumen
            </button>
          </div>
          <button className="btn-propose">
            <FaUpload /> Ajukan Usulan
          </button>
        </header>

        {tab === 'view' && (
          <>
            <section className="dokumen-filters">
              <div className="filter-group">
                <label htmlFor="filterJenis">Jenis Dokumen:</label>
                <select
                  id="filterJenis"
                  value={jenis}
                  onChange={e => setJenis(e.target.value)}
                >
                  <option value="">Semua Jenis</option>
                  <option value="SK CPNS/PNS">SK CPNS/PNS</option>
                  <option value="Ijazah">Ijazah</option>
                  <option value="Sertifikat">Sertifikat</option>
                  <option value="SK Pangkat Terakhir">SK Pangkat Terakhir</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="filterStatus">Status:</label>
                <select
                  id="filterStatus"
                  value={status}
                  onChange={e => setStatus(e.target.value)}
                >
                  <option value="">Semua Status</option>
                  <option value="Menunggu">Menunggu</option>
                  <option value="Terverifikasi">Terverifikasi</option>
                  <option value="Ditolak">Ditolak</option>
                </select>
              </div>

              <div className="filter-group search-group">
                <label htmlFor="search">Cari Dokumen:</label>
                <div className="search-input">
                  <FaSearch />
                  <input
                    id="search"
                    type="text"
                    placeholder="Cari Dokumen"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                  />
                </div>
              </div>
            </section>

            <table className="dokumen-table">
              <thead>
                <tr>
                  <th>Jenis Dokumen</th>
                  <th>Nama Dokumen</th>
                  <th>Tgl Unggah</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(doc => (
                  <tr key={doc.id}>
                    <td>{doc.jenis}</td>
                    <td>{doc.nama}</td>
                    <td>{doc.tgl}</td>
                    <td className={`status-cell status-${doc.status.toLowerCase()}`}>
                      {doc.status}
                    </td>
                    <td className="actions-cell">
                      <FaEye
                        className="icon-view"
                        onClick={() => openPreview(doc)}
                      />
                      <FaTrash className="icon-delete" />
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan="5" className="no-data">
                      Tidak ada dokumen
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        )}

        {tab === 'upload' && (
          <DokumenUpload
            onUpload={handleUpload}
            onCancel={handleCancel}
          />
        )}
      </main>

      {isPreviewOpen && (
        <DokumenPreview
          document={selectedDoc}
          onClose={closePreview}
        />
      )}
    </div>
  );
}
