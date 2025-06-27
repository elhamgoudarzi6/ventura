"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, Search } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  mobile?: string;
  role: string;
}

const initialUsers: User[] = [
  { id: 1, name: "Ali Rezaei", email: "ali@example.com", mobile: "09120000000", role: "Admin" },
  { id: 2, name: "Sara Mohammadi", email: "sara@example.com", mobile: "09121111111", role: "Editor" },
  { id: 3, name: "Nima Amini", email: "nima@example.com", mobile: "09123334444", role: "Viewer" },
];

export default function Requests() {
  const [users, setUsers] = useState(initialUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", role: "" });

  const openAddDialog = () => {
    setEditingUser(null);
    setFormData({ name: "", email: "", mobile: "", role: "" });
    setShowDialog(true);
  };

  const openEditDialog = (user: User) => {
    setEditingUser(user);
    setFormData({ name: user.name, email: user.email, mobile: user.mobile ?? "", role: user.role });
    setShowDialog(true);
  };

  const handleSave = () => {
    if (editingUser) {
      setUsers((prev) =>
        prev.map((u) => (u.id === editingUser.id ? { ...editingUser, ...formData } : u))
      );
    } else {
      const newUser: User = {
        id: Date.now(),
        ...formData,
      };
      setUsers((prev) => [...prev, newUser]);
    }
    setShowDialog(false);
  };

  const handleDelete = (id: number) => {
    setConfirmDeleteId(id);
  };

  const confirmDelete = () => {
    if (confirmDeleteId !== null) {
      setUsers((prev) => prev.filter((u) => u.id !== confirmDeleteId));
      setConfirmDeleteId(null);
    }
  };

  const filteredUsers = users.filter((user) => {
    const q = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(q) ||
      user.email.toLowerCase().includes(q) ||
      user.mobile?.toLowerCase().includes(q) ||
      user.role.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-gray-800">Request Management</h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search name, email, role..."
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
          <button
            onClick={openAddDialog}
            className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm shadow"
          >
            <Plus size={18} /> Add User
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="block sm:hidden space-y-4">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded-xl border border-gray-300 space-y-1">
            <p className="font-semibold text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-600">📧 {user.email}</p>
            <p className="text-sm text-gray-600">📱 {user.mobile}</p>
            <p className="text-sm text-gray-600">🧩 Role: {user.role}</p>
            <div className="flex justify-end gap-2 pt-2">
              <button onClick={() => openEditDialog(user)} className="text-blue-600 hover:text-blue-800">
                <Edit size={16} />
              </button>
              <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:text-red-800">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden sm:block">
        <div className="overflow-x-auto bg-white rounded-xl">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100 text-gray-600 text-sm">
              <tr>
                <th className="text-right px-4 py-3">Name</th>
                <th className="text-right px-4 py-3">Email</th>
                <th className="text-right px-4 py-3">Mobile</th>
                <th className="text-right px-4 py-3">Role</th>
                <th className="text-center px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="text-right px-4 py-3">{user.name}</td>
                  <td className="text-right px-4 py-3">{user.email}</td>
                  <td className="text-right px-4 py-3">{user.mobile}</td>
                  <td className="text-right px-4 py-3">{user.role}</td>
                  <td className="text-center px-4 py-3">
                    <button onClick={() => openEditDialog(user)} className="text-blue-600 hover:text-blue-800 mr-2">
                      <Edit size={18} />
                    </button>
                    <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:text-red-800">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center text-gray-500 py-6">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Dialog */}
      {showDialog && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {editingUser ? "Edit User" : "Add User"}
            </h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <button onClick={() => setShowDialog(false)} className="px-4 py-2 text-sm rounded-lg bg-gray-200 hover:bg-gray-300">
                Cancel
              </button>
              <button onClick={handleSave} className="px-4 py-2 text-sm rounded-lg bg-black text-white hover:bg-gray-900">
                {editingUser ? "Save Changes" : "Add User"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {confirmDeleteId !== null && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Are you sure?</h3>
            <p className="text-sm text-gray-600">This action cannot be undone. Delete the user?</p>
            <div className="flex justify-end gap-2 pt-4">
              <button onClick={() => setConfirmDeleteId(null)} className="px-4 py-2 text-sm rounded-lg bg-gray-200 hover:bg-gray-300">
                Cancel
              </button>
              <button onClick={confirmDelete} className="px-4 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700">
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
