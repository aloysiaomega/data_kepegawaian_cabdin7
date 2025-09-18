import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { FaEye, FaPlus, FaTrash } from 'react-icons/fa'
import UsulanPreview from './UsulanPreview'
import AjukanUsulan from './AjukanUsulan'
import './Usulan.css'

export default function Usulan() {
  // generate 50 dummy data
  const jenisList = [
    'Perubahan Golongan',
    'Penambahan Jam Mengajar',
    'Perubahan Data Pribadi',
    'Tambahan Gaji'
  ]
  const statusList = ['Menunggu', 'Terverifikasi', 'Ditolak']
  const prioritasList = ['Normal', 'Tinggi', 'Rendah']

  const initialUsulan = Array.from({ length: 50 }, (_, i) => {
    const id = i + 1
    return {
      id,
      jenis: jenisList[i % jenisList.length],
      deskripsi: `Deskripsi usulan ke-${id}`,
      tanggal: `${((i % 28) + 1)} Agustus 2023`,
      status: statusList[i % statusList.length],
      prioritas: prioritasList[i % prioritasList.length],
      history: []
    }
  })

  // states
  const [usulanList, setUsulanList] = useState(initialUsulan)
  const [statusFilter, setStatusFilter] = useState('')
  const [jenisFilter, setJenisFilter] = useState('')
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [toDelete, setToDelete] = useState(null)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [detailUsulan, setDetailUsulan] = useState(null)
  const [showAjukanModal, setShowAjukanModal] = useState(false)

  // pagination
  const itemsPerPage = 15
  const [currentPage, setCurrentPage] = useState(1)

  // unique pilihan filter jenis
  const jenisOptions = Array.from(new Set(initialUsulan.map(u => u.jenis)))

  // handlers delete
  const openDeleteModal = u => { setToDelete(u); setShowDeleteModal(true) }
  const closeDeleteModal = () => { setToDelete(null); setShowDeleteModal(false) }
  const confirmDelete = () => {
    setUsulanList(prev => prev.filter(u => u.id !== toDelete.id))
    closeDeleteModal()
  }

  // handlers detail
  const openDetailModal = u => { setDetailUsulan(u); setShowDetailModal(true) }
  const closeDetailModal = () => { setDetailUsulan(null); setShowDetailModal(false) }

  // handlers ajukan baru
  const openAjukanModal = () => setShowAjukanModal(true)
  const closeAjukanModal = () => setShowAjukanModal(false)
  const handleSubmitNew = ({ jenis, deskripsi, prioritas }) => {
    const nextId = usulanList.length
      ? Math.max(...usulanList.map(u => u.id)) + 1
      : 1
    const hariIni = new Date().toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric'
    })
    const newItem = {
      id: nextId,
      jenis,
      deskripsi,
      tanggal: hariIni,
      status: 'Menunggu',
      prioritas,
      history: []
    }
    setUsulanList(prev => [...prev, newItem])
    closeAjukanModal()
  }

  // apply filter
  const filtered = usulanList
    .filter(u => (jenisFilter ? u.jenis === jenisFilter : true))
    .filter(u => (statusFilter ? u.status === statusFilter : true))

  // pagination calculations
  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const startIdx = (currentPage - 1) * itemsPerPage
  const currentItems = filtered.slice(startIdx, startIdx + itemsPerPage)

  const goToPage = p => setCurrentPage(p)
  const prevPage = () => setCurrentPage(p => Math.max(1, p - 1))
  const nextPage = () => setCurrentPage(p => Math.min(totalPages, p + 1))

  return (
    <div className="usulan-page">
      <Sidebar />

      <main className="usulan-content">
        <header className="usulan-header">
          <h1>Usul Perubahan Data</h1>
          <div className="usulan-actions">
            <div className="filter-group">
              <label htmlFor="filterJenis">Jenis :</label>
              <select
                id="filterJenis"
                value={jenisFilter}
                onChange={e => { setJenisFilter(e.target.value); setCurrentPage(1) }}
              >
                <option value="">Semua Jenis</option>
                {jenisOptions.map(j => (
                  <option key={j} value={j}>{j}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="filterStatus">Status :</label>
              <select
                id="filterStatus"
                value={statusFilter}
                onChange={e => { setStatusFilter(e.target.value); setCurrentPage(1) }}
              >
                <option value="">Semua Status</option>
                <option value="Terverifikasi">Terverifikasi</option>
                <option value="Menunggu">Menunggu</option>
                <option value="Ditolak">Ditolak</option>
              </select>
            </div>

            <button className="btn-new" onClick={openAjukanModal}>
              <FaPlus /> Ajukan Usulan Baru
            </button>
          </div>
        </header>
        <hr /> <br /> <br />
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
            {currentItems.map(u => (
              <tr key={u.id}>
                <td>{u.jenis}</td>
                <td className="wrap-cell">{u.deskripsi}</td>
                <td>{u.tanggal}</td>
                <td className={`status-cell-U status-${u.status.toLowerCase()}`}>
                  {u.status}
                </td>
                <td className="actions-cell">
                  <FaEye className="icon-view" onClick={() => openDetailModal(u)} />
                  <FaTrash className="icon-delete" onClick={() => openDeleteModal(u)} />
                </td>
              </tr>
            ))}
            {currentItems.length === 0 && (
              <tr>
                <td colSpan="5" className="no-data">Tidak ada usulan</td>
              </tr>
            )}
          </tbody>
        </table>
        <br /><br />
        {/* pagination controls */}
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>&lt;</button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button
              key={p}
              className={p === currentPage ? 'active' : ''}
              onClick={() => goToPage(p)}
            >
              {p}
            </button>
          ))}
          <button onClick={nextPage} disabled={currentPage === totalPages}>&gt;</button>
        </div>
      </main>

      {/* Delete Confirmation */}
      {showDeleteModal && (
        <div className="modal-overlay" onClick={closeDeleteModal}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <h2 className="modal-title">Konfirmasi Hapus</h2>
            <p className="modal-body">
              Apakah Anda yakin menghapus usulan <strong>“{toDelete.jenis}”</strong>?
            </p>
            <div className="modal-footer">
              <button className="btn-cancel" onClick={closeDeleteModal}>Batal</button>
              <button className="btn-confirm" onClick={confirmDelete}>Hapus</button>
            </div>
          </div>
        </div>
      )}

      {/* Detail Preview */}
      {showDetailModal && (
        <UsulanPreview detailUsulan={detailUsulan} onClose={closeDetailModal} />
      )}

      {/* Ajukan Baru */}
      {showAjukanModal && (
        <AjukanUsulan onClose={closeAjukanModal} onSubmit={handleSubmitNew} />
      )}
    </div>
  )
}
