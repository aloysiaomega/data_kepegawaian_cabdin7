// src/pages/Usulan/Usulan.jsx

import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FaEye, FaPlus, FaTrash } from 'react-icons/fa';
import './Usulan.css';

export default function Usulan() {
  // Data awal bisa diambil dari API nanti
  const initialUsulan = [
    { id: 1, jenis: 'Usul Perubahan Golonga', deskripsi: 'Menunggu verifikasi operator', tanggal: '12/12/2025', status: 'Menunggu' },
    { id: 2, jenis: 'Penambahan Jam Mengajar', deskripsi: 'Data telah diproses', tanggal: '12/12/2025', status: 'Terverifikasi' },
    { id: 3, jenis: 'Perubahan Data Pribadi', deskripsi: 'Sedang diproses', tanggal: '12/12/2025', status: 'Menunggu' },
    { id: 4, jenis: 'Tambahan Gaji', deskripsi: 'Usulan Anda Ditolak', tanggal: '12/12/2025', status: 'Ditolak' }
  ];

  const [statusFilter, setStatusFilter] = useState('');
  const [usulanList, setUsulanList] = useState(initialUsulan);

  // Modal delete state
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [toDelete, setToDelete] = useState(null);

  // buka modal konfirmasi
  const openDeleteModal = usulan => {
    setToDelete(usulan);
    setShowDeleteModal(true);
  };

  // batal delete
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setToDelete(null);
  };

  // benar-benar hapus
  const confirmDelete = () => {
    setUsulanList(prev => prev.filter(u => u.id !== toDelete.id));
    closeDeleteModal();
  };

  // filter berdasar status
  const filtered = statusFilter
    ? usulanList.filter(u => u.status === statusFilter)
    : usulanList;

  return (
    <div className="usulan-page">
      <Sidebar />

      <main className="usulan-content">
        <header className="usulan-header">
          <h1>Usul Perubahan Data</h1>
          <div className="usulan-actions">
            <div className="filter-group">
              <label htmlFor="filterStatus">Status :</label>
              <select
                id="filterStatus"
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
              >
                <option value="">Semua Status</option>
                <option value="Terverifikasi">Terverifikasi</option>
                <option value="Menunggu">Menunggu</option>
                <option value="Ditolak">Ditolak</option>
              </select>
            </div>
            <button className="btn-new">
              <FaPlus /> Ajukan Usulan Baru
            </button>
          </div>
        </header>

        <table className="usulan-table">
          <thead>
            <tr>
              <th>Jenis Usulan</th>
              <th>Deskripsi Usulan</th>
              <th>Tanggal Pengajuan</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(u => (
              <tr key={u.id}>
                <td>{u.jenis}</td>
                <td>{u.deskripsi}</td>
                <td>{u.tanggal}</td>
                <td className={`status-cell-U status-${u.status.toLowerCase()}`}>
                  {u.status}
                </td>
                <td className="actions-cell">
                  <FaEye className="icon-view" />
                  <FaTrash
                    className="icon-delete"
                    onClick={() => openDeleteModal(u)}
                  />
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="5" className="no-data">
                  Tidak ada usulan
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </main>

      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2 className="modal-title">Konfirmasi Hapus</h2>
            <p className="modal-body">
              Apakah Anda yakin ingin menghapus usulan 
              <strong> “{toDelete.jenis}”</strong>?
            </p>
            <div className="modal-footer">
              <button className="btn-cancel" onClick={closeDeleteModal}>
                Batal
              </button>
              <button className="btn-confirm" onClick={confirmDelete}>
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
