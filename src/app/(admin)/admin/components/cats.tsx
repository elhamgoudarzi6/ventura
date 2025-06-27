"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, Search } from "lucide-react";
import { categoryApi } from "@/services/admin/catApi";
// import MessageBox from "@/ui/messagebox";

interface Article {
    id: number;
    title: string;
}

const initial: Article[] = [
    { id: 0, title: "startup" },
    { id: 1, title: "invest" }
]

export default function Articles() {
    const [items, setItems] = useState(initial);
    const [searchQuery, setSearchQuery] = useState("");
    const [showDialog, setShowDialog] = useState(false);
    const [editing, setEditing] = useState<Article | null>(null);
    const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);
    const [formData, setFormData] = useState({ title: "" });
    // const [messageBox, setMessageBox] = useState<{ type: "success" | "error"; message: string; }>({ type: "success", message: "" });
    // const [showMessage, setShowMessage] = useState(false);

    // const showMessageBox = (type: "success" | "error", message: string) => {
    //     setMessageBox({ type, message });
    //     setShowMessage(true);
    // };

    const handleAdd = async () => {
        // if (userName.trim() === "" || password.trim() === "") {
        //   showMessageBox("error", "اطلاعات را بطور کامل وارد کنید.");
        //   return;
        // }
        try {
            const res = await categoryApi.add(formData);
            console.log(formData)
            if (res.success === true) {
               // showMessageBox("success", "ثبت شد");
            } else {
               // showMessageBox("error", "ثبت نشد");
            }
        } catch (err) {
                 console.log(err)
           // showMessageBox("error", "خطا در ارتباط با سرور. لطفاً دوباره تلاش کنید.");
        }
    };

    const openAddDialog = () => {
        setEditing(null);
        setFormData({ title: "" });
        setShowDialog(true);
    };

    const openEditDialog = (item: Article) => {
        setEditing(item);
        setFormData({ title: item.title });
        setShowDialog(true);
    };

    // const handleSave = () => {
    //   if (editing) {
    //     setItems((prev) =>
    //       prev.map((u) => (u.id === editing.id ? { ...editing, ...formData } : u))
    //     );
    //   } else {
    //     const newItem: Article = {
    //       id: Date.now(),
    //       ...formData,
    //     };
    //     setItems((prev) => [...prev, newItem]);
    //   }
    //   setShowDialog(false);
    // };


    const handleSave = () => {
        if (editing) {
            setItems((prev) =>
                prev.map((u) => (u.id === editing.id ? { ...editing, ...formData } : u))
            );
        } else {
            // const newItem: Article = {
            //   id: Date.now(),
            //   ...formData,
            // };
            // setItems((prev) => [...prev, newItem]);
            handleAdd();
        }
        setShowDialog(false);
    };

    const handleDelete = (id: number) => {
        setConfirmDeleteId(id);
    };

    const confirmDelete = () => {
        if (confirmDeleteId !== null) {
            setItems((prev) => prev.filter((u) => u.id !== confirmDeleteId));
            setConfirmDeleteId(null);
        }
    };

    const filtered = items.filter((item) => {
        const q = searchQuery.toLowerCase();
        return (
            item.title.toLowerCase().includes(q)
        );
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <h2 className="text-xl font-semibold text-gray-800">Cat Management</h2>
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
                    <button onClick={openAddDialog}
                        className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm shadow"
                    >
                        Add <Plus size={18} />
                    </button>
                </div>
            </div>

            {/* Mobile */}
            <div className="block sm:hidden space-y-4">
                {filtered.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-xl border border-gray-300 space-y-1">
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <div className="flex justify-end gap-2 pt-2">
                            <button onClick={() => openEditDialog(item)} className="text-blue-600 hover:text-blue-800">
                                <Edit size={16} />
                            </button>
                            <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-800">
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
                                <th className="text-right px-4 py-3">Title</th>
                                <th className="text-center px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((item) => (
                                <tr key={item.id} className="border-t border-gray-200 hover:bg-gray-50">
                                    <td className="text-right px-4 py-3">{item.title}</td>
                                    <td className="text-center px-4 py-3">
                                        <button onClick={() => openEditDialog(item)} className="text-blue-600 hover:text-blue-800 mr-2">
                                            <Edit size={18} />
                                        </button>
                                        <button onClick={() => handleDelete(item.id)} className="text-red-600 mr-3 hover:text-red-800">
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
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
                            {editing ? "Edit" : "Add"}
                        </h3>
                        <div className="space-y-3">
                            <input
                                type="text"
                                placeholder="title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>
                        <div className="flex justify-end gap-2 pt-4">
                            <button onClick={() => setShowDialog(false)} className="px-4 py-2 text-sm rounded-lg bg-gray-200 hover:bg-gray-300">
                                Cancel
                            </button>
                            <button onClick={handleSave} className="px-4 py-2 text-sm rounded-lg bg-black text-white hover:bg-gray-900">
                                {editing ? "Save Changes" : "Add"}
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
