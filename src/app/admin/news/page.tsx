'use client';

import { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, Eye, Calendar, Tag, LogOut, ArrowLeft } from 'lucide-react';
import api from '@/lib/api';
import { useRouter } from 'next/navigation';

interface News {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  status: string;
  publishedAt?: string;
  createdAt: string;
}

const categoryLabels: Record<string, string> = {
  GENERAL: 'Général',
  ACADEMIC: 'Académique',
  EVENTS: 'Événements',
  RESEARCH: 'Recherche',
  ADMISSIONS: 'Admissions',
  PARTNERSHIPS: 'Partenariats',
};

const statusLabels: Record<string, string> = {
  DRAFT: 'Brouillon',
  PUBLISHED: 'Publié',
  ARCHIVED: 'Archivé',
};

const statusColors: Record<string, string> = {
  DRAFT: 'bg-gray-500',
  PUBLISHED: 'bg-green-500',
  ARCHIVED: 'bg-red-500',
};

export default function AdminNewsPage() {
  const router = useRouter();
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingNews, setEditingNews] = useState<News | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    imageUrl: '',
    category: 'GENERAL',
    status: 'DRAFT',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await api.get('/news/admin/all');
      setNews(response.data.data);
    } catch (error: any) {
      if (error.response?.status === 401) {
        router.push('/admin/login');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingNews) {
        await api.put(`/news/${editingNews.id}`, formData);
      } else {
        await api.post('/news', formData);
      }
      alert('Actualité ' + (editingNews ? 'modifiée' : 'créée') + ' avec succès !');
      setShowForm(false);
      setEditingNews(null);
      resetForm();
      fetchNews();
    } catch (error: any) {
      alert('Erreur: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleEdit = (item: News) => {
    setEditingNews(item);
    setFormData({
      title: item.title,
      excerpt: item.excerpt,
      content: '',
      imageUrl: '',
      category: item.category,
      status: item.status,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Supprimer cette actualité ?')) return;
    try {
      await api.delete(`/news/${id}`);
      fetchNews();
    } catch (error: any) {
      if (error.response?.status === 401) {
        router.push('/admin/login');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      imageUrl: '',
      category: 'GENERAL',
      status: 'DRAFT',
    });
    setImageFile(null);
    setImagePreview('');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Vérifier la taille du fichier (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        alert('L\'image est trop grande. Taille maximale: 5MB');
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
        setFormData(prev => ({ ...prev, imageUrl: base64String }));
      };
      reader.readAsDataURL(file);
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
      router.push('/admin/login');
    } catch (error) {
      router.push('/admin/login');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-800 to-primary-900 p-3 sm:p-6">
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'linear-gradient(#00e68a 1px, transparent 1px), linear-gradient(90deg, #00e68a 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
      
      <div className="relative z-10">
        <div className="bg-white/10 backdrop-blur-sm border-2 border-accent/20 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => router.push('/admin')}
                className="bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white p-2 sm:p-3 rounded-xl transition flex-shrink-0"
                title="Retour au dashboard"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Gestion des Actualités</h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  setShowForm(true);
                  setEditingNews(null);
                  resetForm();
                }}
                className="bg-accent hover:bg-accent/90 text-primary px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold flex items-center gap-2 transition flex-1 sm:flex-initial justify-center text-sm sm:text-base"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Nouvelle actualité</span>
                <span className="sm:hidden">Nouveau</span>
              </button>
              <button
                onClick={handleLogout}
                className="bg-white/10 hover:bg-red-600 border-2 border-white/20 hover:border-red-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold flex items-center gap-2 transition text-sm sm:text-base"
              >
                <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Déconnexion</span>
              </button>
            </div>
          </div>
        </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-start justify-center p-4 overflow-y-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl max-w-4xl w-full my-8 border-2 border-primary/10">
            <div className="bg-gradient-to-r from-primary to-primary-800 p-6 sm:p-8 rounded-t-3xl sticky top-0 z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  {editingNews ? <Edit className="w-5 h-5 sm:w-6 sm:h-6 text-primary" /> : <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />}
                </div>
                <span className="line-clamp-1">{editingNews ? 'Modifier l\'actualité' : 'Nouvelle actualité'}</span>
              </h2>
              <p className="text-white/80 mt-2 text-sm sm:text-base">Remplissez les informations ci-dessous</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-4 sm:p-8 space-y-6">
              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">1</span>
                  Titre *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all text-lg group-hover:border-gray-300"
                  placeholder="Ex: Nouvelle formation en santé publique"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">2</span>
                  Résumé *
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={3}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none resize-none transition-all group-hover:border-gray-300"
                  placeholder="Courte description de l'actualité (150 caractères max)"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">3</span>
                  Contenu *
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={10}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none resize-none transition-all group-hover:border-gray-300 font-mono text-sm"
                  placeholder="Contenu détaillé de l'actualité..."
                  required
                />
              </div>

              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">4</span>
                  Image
                </label>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <label className="flex-1 cursor-pointer">
                      <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 hover:border-primary hover:bg-primary/5 transition-all text-center group-hover:border-gray-400">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                            <Plus className="w-6 h-6 text-gray-400" />
                          </div>
                          <div className="text-sm font-semibold text-gray-700">
                            {imageFile ? imageFile.name : 'Cliquez pour sélectionner une image'}
                          </div>
                          <div className="text-xs text-gray-500">PNG, JPG jusqu'à 5MB</div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-gradient-to-br from-white to-gray-50 text-gray-500 font-semibold">OU</span>
                    </div>
                  </div>
                  <input
                    type="url"
                    value={formData.imageUrl.startsWith('data:') ? '' : formData.imageUrl}
                    onChange={(e) => {
                      const url = e.target.value;
                      setImageFile(null);
                      setFormData(prev => ({ ...prev, imageUrl: url }));
                      setImagePreview(url);
                    }}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="https://example.com/image.jpg"
                    disabled={!!imageFile}
                  />
                  {imagePreview && (
                    <div className="mt-4 relative group/preview">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity rounded-2xl flex items-end p-4">
                        <span className="text-white text-sm font-semibold">Aperçu de l'image</span>
                      </div>
                      <img src={imagePreview} alt="Aperçu" className="w-full h-64 object-cover rounded-2xl border-2 border-gray-200" />
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">5</span>
                    Catégorie *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all text-lg group-hover:border-gray-300 bg-white cursor-pointer"
                  >
                    {Object.entries(categoryLabels).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>

                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">6</span>
                    Statut *
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all text-lg group-hover:border-gray-300 bg-white cursor-pointer"
                  >
                    {Object.entries(statusLabels).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t-2 border-gray-100">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-primary to-primary-800 hover:from-primary-700 hover:to-primary-900 text-white py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  {editingNews ? (
                    <><Edit className="w-5 h-5" /> Mettre à jour</>
                  ) : (
                    <><Plus className="w-5 h-5" /> Créer l'actualité</>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingNews(null);
                    resetForm();
                  }}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-4 rounded-2xl font-bold transition-all hover:shadow-md"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Vue Desktop */}
            <div className="hidden xl:block bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary-900/50 border-b border-white/10">
                    <tr>
                      <th className="px-4 xl:px-6 py-4 text-left text-sm font-bold text-accent whitespace-nowrap">Titre</th>
                      <th className="px-4 xl:px-6 py-4 text-left text-sm font-bold text-accent whitespace-nowrap">Catégorie</th>
                      <th className="px-4 xl:px-6 py-4 text-left text-sm font-bold text-accent whitespace-nowrap">Statut</th>
                      <th className="px-4 xl:px-6 py-4 text-left text-sm font-bold text-accent whitespace-nowrap">Date</th>
                      <th className="px-4 xl:px-6 py-4 text-right text-sm font-bold text-accent whitespace-nowrap">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {news.map((item) => (
                      <tr key={item.id} className="hover:bg-white/5 transition">
                        <td className="px-4 xl:px-6 py-4">
                          <div className="font-semibold text-white max-w-xs">{item.title}</div>
                          <div className="text-sm text-white/70 line-clamp-1 max-w-xs">{item.excerpt}</div>
                        </td>
                        <td className="px-4 xl:px-6 py-4">
                          <span className="inline-flex items-center gap-1 text-sm text-white/80 whitespace-nowrap">
                            <Tag className="w-4 h-4" />
                            {categoryLabels[item.category]}
                          </span>
                        </td>
                        <td className="px-4 xl:px-6 py-4">
                          <span className={`${item.status === 'PUBLISHED' ? 'bg-accent/20 text-accent border border-accent/30' : item.status === 'DRAFT' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' : 'bg-white/10 text-white/60 border border-white/20'} px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap`}>
                            {statusLabels[item.status]}
                          </span>
                        </td>
                        <td className="px-4 xl:px-6 py-4">
                          <div className="flex items-center gap-1 text-sm text-white/70 whitespace-nowrap">
                            <Calendar className="w-4 h-4" />
                            {formatDate(item.publishedAt || item.createdAt)}
                          </div>
                        </td>
                        <td className="px-4 xl:px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleEdit(item)}
                              className="p-2 text-accent hover:bg-accent/20 rounded-lg transition"
                              title="Modifier"
                            >
                              <Edit className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition"
                              title="Supprimer"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Vue Mobile/Tablette */}
            <div className="xl:hidden space-y-4">
              {news.map((item) => (
                <div key={item.id} className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-4 hover:bg-white/15 transition">
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white text-lg mb-1 line-clamp-2">{item.title}</h3>
                      <p className="text-sm text-white/70 line-clamp-2">{item.excerpt}</p>
                    </div>
                    <span className={`${item.status === 'PUBLISHED' ? 'bg-accent/20 text-accent border border-accent/30' : item.status === 'DRAFT' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' : 'bg-white/10 text-white/60 border border-white/20'} px-2 py-1 rounded-full text-xs font-bold whitespace-nowrap flex-shrink-0`}>
                      {statusLabels[item.status]}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
                    <span className="inline-flex items-center gap-1 text-white/80">
                      <Tag className="w-4 h-4" />
                      {categoryLabels[item.category]}
                    </span>
                    <span className="inline-flex items-center gap-1 text-white/70">
                      <Calendar className="w-4 h-4" />
                      {formatDate(item.publishedAt || item.createdAt)}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="flex-1 bg-accent/20 hover:bg-accent/30 text-accent border border-accent/30 py-2 rounded-xl font-semibold flex items-center justify-center gap-2 transition text-sm"
                    >
                      <Edit className="w-4 h-4" />
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 py-2 rounded-xl font-semibold flex items-center justify-center gap-2 transition text-sm"
                    >
                      <Trash2 className="w-4 h-4" />
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
